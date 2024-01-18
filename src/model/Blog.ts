/**
* @type {mongoose.SchemaDefinitionProperty}
*/
import mongoose from "mongoose";

const Blog = new mongoose.Schema(
    {
        title: String,
        description: String,
        imageUrl: String,
        bodyContent: String,
        category: String,
        pinned: Boolean,
        tags: [String],
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Blog || mongoose.model("Blog", Blog);