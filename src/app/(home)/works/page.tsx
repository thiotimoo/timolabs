import { HeaderSection, MainContent, Section } from "@/components/layout";
import { ProjectList } from "@/components/ui/list";
import { fetchSortedBlogs } from "@/lib/blog-libs";
import { getSortedPostData } from "@/lib/blogs";
import React from "react";
const BLOG_TYPE = "works";
const getPostsList = async () => {
    const data = await fetchSortedBlogs(BLOG_TYPE, 100);
    return data;
};

const PostPage = async () => {
    const data = await getPostsList();
    return (
        <MainContent>
            <Section>
                <HeaderSection>My Works</HeaderSection>
                <ProjectList data={data} />
            </Section>
        </MainContent>
    );
};

export default PostPage;
