import connectDatabase from "@/lib/connectDatabase";
import Blog from "@/model/Blog";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const token = await getToken({ req });
    if (token && token?.role == "admin") {
        // Signed in
        await connectDatabase();

        const {
            _id,
            title,
            description,
            imageUrl,
            bodyContent,
            category,
            pinned,
            blogType,
            slug,
            visibility,
            tags,
        } = await req.json();

        const blog = new Blog({
            _id: _id,
            title: title,
            description: description,
            imageUrl: imageUrl,
            bodyContent: bodyContent,
            category: category,
            pinned: pinned,
            blogType: blogType,
            slug: slug,
            visibility,
            tags: tags,
        });

        let doc;
        if (_id) {
            doc = await Blog.findByIdAndUpdate(_id, blog, {
                new: true,
                upsert: true, // Make this update into an upsert
            });
        } else {
            doc = await blog.save();
        }

        return Response.json({ statusCode: 200, data: doc });
    } else {
        // Not Signed in
        return Response.json({ statusCode: 401, error: "Unauthorized" });
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    await connectDatabase();

    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");
        const blogType = searchParams.get("type") || "blogs";
        const visibility = searchParams.get("visibility") || "published";
        const id = searchParams.get("id");
        const token = await getToken({ req });
        const filter:any = {
            blogType: blogType,
        };
        if (token?.role !== "admin" || (visibility !== "all" && token?.role === "admin")) {
            filter.visibility = visibility
        }
        let data;
        if (slug) {
            filter.slug = slug;
            data = await Blog.findOne({...filter });
        } else if (id) {
            filter._id = id;
            data = await Blog.findOne({ ...filter });
        } else {
            data = await Blog.find({ ...filter }).sort({
                createdAt: "desc",
            });
        }
        return Response.json({ statusCode: 200, data: data });
    } catch (error) {
        console.log(error);
        return Response.json({ statusCode: 400, error: error });
    }
}
