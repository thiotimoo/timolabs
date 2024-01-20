import connectDatabase from "@/lib/connectDatabase";
import Blog from "@/model/Blog";

export async function POST(req: Request, res: Response) {
    await connectDatabase();

    const {
        title,
        description,
        imageUrl,
        bodyContent,
        category,
        pinned,
        blogType,
        slug,
        tags,
    } = await req.json();

    const blog = new Blog({
        title: title,
        description: description,
        imageUrl: imageUrl,
        bodyContent: bodyContent,
        category: category,
        pinned: pinned,
        blogType: blogType,
        slug: slug,
        tags: tags,
    });

    const doc = await blog.save();
    return Response.json({ statusCode: 200, data: doc });
}

export async function GET(req: Request, res: Response) {
    await connectDatabase();
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");
        let data;
        if (slug) {
            data = await Blog.findOne({ slug: slug });
        } else {
            data = await Blog.find().sort({ createdAt: "desc" });
        }
        return Response.json({ statusCode: 200, data: data });
    } catch (error) {
        console.log(error);
        return Response.json({ statusCode: 400, error: error });
    }
}
