import React from "react";
import BlogBuilder from "@/components/builder/BlogBuilder";

const ViewPostPage = ({ params }: any) => {
    const { slug } = params;
    return (
        <BlogBuilder slug={slug} blogType="projects"/>
    );
};

export default ViewPostPage;
