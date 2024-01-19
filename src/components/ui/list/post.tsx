import React from "react";
import { getSortedPostData } from "@/lib/blogs";
import { IPostList } from "@/types/base";
import { HeaderSection, Section } from "../../layout/section";
import { ItemPost } from "../item";
const BLOG_TYPE = "blogs";

async function getData(display: boolean) {
    const res = await getSortedPostData(BLOG_TYPE, display ? 4 : 100);
    return res;
}

export const PostList: React.FC<IPostList> = async ({ display = false }) => {
    const data = await getData(display);
    return (
        <Section>
            <HeaderSection href={display ? "/blogs" : undefined}>
                Recent Posts
            </HeaderSection>
            <div className={`grid grid-cols-1 gap-4`}>
                {data.map((item) => {
                    return <ItemPost key={item.slug} {...item} />;
                })}
            </div>
        </Section>
    );
};
