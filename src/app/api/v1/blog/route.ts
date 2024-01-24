import connectDatabase from "@/lib/connectDatabase";
import Blog from "@/model/Blog";

export async function POST(req: Request, res: Response) {
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
}

export async function GET(req: Request, res: Response) {
    await connectDatabase();
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");
        const blogType = searchParams.get("type") || "blogs";
        const id = searchParams.get("id");
        let data;
        if (slug) {
            data = await Blog.findOne({ slug: slug, blogType: blogType });
        } else if (id) {
            data = await Blog.findOne({ _id: id });
        } else {
            data = await Blog.find({ blogType: blogType }).sort({ createdAt: "desc" });
        }
        return Response.json({ statusCode: 200, data: data });
    } catch (error) {
        console.log(error);
        return Response.json({ statusCode: 400, error: error });
    }
}