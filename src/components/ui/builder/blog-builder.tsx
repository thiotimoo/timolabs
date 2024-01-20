import { BlogPostProps, IBlogBuilder } from "@/types/blogs";
import React from "react";
import { Article, MainContent } from "@/components/layout";
import { MarkdownBuilder } from "../markdown";
import { fetchBlogBySlug } from "@/lib/blogs";
import { IBlog } from "@/model/Blog";
const getData = async (blogType: string,slug: string) => {
    const data: IBlog = await fetchBlogBySlug(blogType, slug);
    return data;
};

export const BlogBuilder: React.FC<IBlogBuilder> = async ({ blogType,slug }) => {
    const blogData = await getData(blogType, decodeURI(slug));
    return (
        <MainContent>
            <Article blogData={blogData}>
                <MarkdownBuilder markdownBody={blogData.bodyContent}/>
            </Article>
        </MainContent>
    );
};