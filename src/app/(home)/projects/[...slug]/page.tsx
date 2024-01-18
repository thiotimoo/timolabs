import React from "react";
import BlogBuilder from "@/components/Builder/BlogBuilder";

const ViewPostPage = ({ params }: any) => {
    const { slug } = params;
    return (
        <BlogBuilder slug={slug} blogType="projects"/>
    );
};

export default ViewPostPage;
