import MainLayout from "@/components/Layouts/MainLayout";
import { getBlogBySlug } from "@/lib/blogs";
import { BlogPostProps, IBlogBuilder } from "@/types/blogs";
import React from "react";
import BlogLayout from "@/components/Layouts/BlogLayout";
import MarkdownBuilder from "@/components/Builder/MarkdownBuilder";
const getData = async (blogType: string,slug: string) => {
    const data: BlogPostProps = await getBlogBySlug(blogType, slug);
    return data;
};

const BlogBuilder: React.FC<IBlogBuilder> = async ({ blogType,slug }) => {
    const {frontMatter, markdownBody} = await getData(blogType, decodeURI(slug));
    return (
        <MainLayout>
            <BlogLayout frontMatter={frontMatter}>
                <MarkdownBuilder markdownBody={markdownBody}/>
            </BlogLayout>
        </MainLayout>
    );
};

export default BlogBuilder;
