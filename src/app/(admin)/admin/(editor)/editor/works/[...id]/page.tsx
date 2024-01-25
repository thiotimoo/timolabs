import { BlogEditorPage } from "@/components/layout";
import React from "react";

const BlogEditor = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return <BlogEditorPage id={id} blogType="works" />;
};

export default BlogEditor;
