import { HeaderSection, MainContent, Section } from "@/components/layout";
import { PostList, ProjectList } from "@/components/ui/list";
import { fetchSortedBlogs } from "@/lib/blog-libs";
import React from "react";
const BLOG_TYPE = "blogs";
const getPostsList = async () => {
    const data = await fetchSortedBlogs(BLOG_TYPE, 100);
    return data;
};

const PostPage = async () => {
    const data = await getPostsList();
    return (
        <MainContent>
            <Section>
                <HeaderSection>My Blogs</HeaderSection>
                <PostList data={data} />
            </Section>
        </MainContent>
    );
};

export default PostPage;
