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
        tags,
    } = await req.json();

    const blog = new Blog({
        title: title,
        description: description,
        imageUrl: imageUrl,
        bodyContent: bodyContent,
        category: category,
        pinned: pinned,
        tags: tags,
    });

    const doc = await blog.save();
    return Response.json({ statusCode: 200, data: doc });
}

export async function GET(req: Request, res: Response) {
    await connectDatabase();
    try {
        const data = await Blog.find();
        return Response.json({ statusCode: 200, data: data });
    } catch (error) {
        console.log(error);
        return Response.json({ statusCode: 400, error: error });
    }
}
