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
        title: title.toString(),
        description: description.toString(),
        imageUrl: imageUrl.toString(),
        bodyContent: bodyContent.toString(),
        category: category.toString(),
        pinned: pinned,
        tags: tags,
    });

    const doc = await blog.save();
    return Response.json({ statusCode: 200, data: doc });
}
