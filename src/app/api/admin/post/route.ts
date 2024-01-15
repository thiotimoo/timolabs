import Post from "@/model/Post";
import connectDatabase from "@/lib/connectDatabase";
import { escape } from "querystring";

export async function POST(req: Request, res: Response) {
    await connectDatabase();
    // const post = new Post({
    //     title: "Mimpunan",
    //     description: "Description",
    //     date: "date",
    //     thumbnail_url: "/projects/mengaku-ngl.png",
    //     pinned: false,
    //     project_type: "game",
    // });

    const { title, date, category, thumbnail_url } = await req.json();
    const post = new Post({
        title: title,
        date: date,
        category: category,
        thumbnail_url: thumbnail_url,
    });

    const doc = await post.save();
    return Response.json({ statusCode: 200, data: doc });
}
