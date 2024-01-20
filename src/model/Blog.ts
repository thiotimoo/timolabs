import mongoose from "mongoose";
export interface IBlog {
    title: string;
    description?: string;
    imageUrl?: string;
    bodyContent: string;
    category?: string;
    slug: string;
    pinned?: boolean;
    blogType: "blogs" | "works";
    tags?: [string];
    createdAt? : Date;
}

const Blog = new mongoose.Schema<IBlog>(
    {
        title: { type: String, required: true },
        description: String,
        imageUrl: String,
        slug: String,
        bodyContent: { type: String, required: true },
        category: String,
        pinned: Boolean,
        blogType: String,
        tags: [String],
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Blog<IBlog> || mongoose.model<IBlog>("Blog", Blog);
