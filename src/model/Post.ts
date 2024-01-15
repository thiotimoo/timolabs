import mongoose from "mongoose";

const Post = new mongoose.Schema(
    {
        title: String,
        description: String,
        date: String,
        thumbnail_url: String,
        pinned: Boolean, 
        project_type: String,
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Post || mongoose.model("Post", Post);