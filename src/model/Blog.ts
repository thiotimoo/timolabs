import { BlogVisibility } from "@/types/blogs";
import mongoose from "mongoose";
export interface IBlog {
    _id?: string,  
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
    visibility?: BlogVisibility;
}

const Blog = new mongoose.Schema<IBlog>(
    {
        title: String,
        description: String,
        imageUrl: String,
        slug: String,
        bodyContent: String,
        category: String,
        pinned: Boolean,
        blogType: String,
        tags: [String],
        visibility: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Blog<IBlog> || mongoose.model<IBlog>("Blog", Blog);
