import { getBlogBySlug } from "@/lib/blogs";
import { BlogPostProps, IBlogBuilder } from "@/types/blogs";
import React from "react";
import { Article, MainContent } from "@/components/layout";
import { MarkdownBuilder } from "../markdown";
const getData = async (blogType: string,slug: string) => {
    const data: BlogPostProps = await getBlogBySlug(blogType, slug);
    return data;
};

export const BlogBuilder: React.FC<IBlogBuilder> = async ({ blogType,slug }) => {
    const {frontMatter, markdownBody} = await getData(blogType, decodeURI(slug));
    return (
        <MainContent>
            <Article frontMatter={frontMatter}>
                <MarkdownBuilder markdownBody={markdownBody}/>
            </Article>
        </MainContent>
    );
};