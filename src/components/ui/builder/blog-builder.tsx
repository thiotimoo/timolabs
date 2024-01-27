import { BlogPostProps, BlogType, IBlogBuilder } from "@/types/blogs";
import React, { useEffect, useState } from "react";
import { Article, MainContent } from "@/components/layout";
import { MarkdownBuilder } from "../markdown";
import { IBlog } from "@/model/Blog";
import { fetchBlogFromSlug } from "@/lib/blog-libs";

const getBlog = async (blogType: BlogType, slug: string) => {
    const data = await fetchBlogFromSlug(blogType, slug);
    return data;
};

export const BlogBuilder: React.FC<IBlogBuilder> = async ({
    blogType,
    slug,
}) => {
    const blog = await getBlog(blogType, slug);

    return (
        blog ? (
            <MainContent>
                <Article blogData={blog}>
                    <MarkdownBuilder markdownBody={blog?.bodyContent} />
                </Article>
            </MainContent>
        ) : <MainContent>404 Not Found</MainContent>
    );
};
