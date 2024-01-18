import React from "react";
import BlogBuilder from "@/components/Builder/BlogBuilder";

const ViewPostPage = ({ params }: any) => {
    const { slug } = params;
    return (
        <BlogBuilder slug={slug} blogType="posts"/>
    );
};

export default ViewPostPage;
