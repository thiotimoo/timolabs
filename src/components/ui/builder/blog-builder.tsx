"use client"
import { BlogPostProps, IBlogBuilder } from "@/types/blogs";
import React, { useEffect, useState } from "react";
import { Article, MainContent } from "@/components/layout";
import { MarkdownBuilder } from "../markdown";
import { fetchBlogBySlug } from "@/lib/blogs";
import { IBlog } from "@/model/Blog";


export const BlogBuilder: React.FC<IBlogBuilder> = ({
    blogType,
    slug,
}) => {
    const [blogData, setBlogData] = useState<any>({})
    const fetchData = async () => {
        setBlogData(await fetchBlogBySlug(blogType, slug));
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        blogData && (
            <MainContent>
                <Article blogData={blogData}>
                    <MarkdownBuilder markdownBody={blogData?.bodyContent} />
                </Article>
            </MainContent>
        )
    );
};
