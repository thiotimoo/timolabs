import React from "react";
import Section from "../../Section/BaseSection";
import { getSortedPostData } from "@/lib/blogs";
import ItemPost from "@/components/Items/ItemPost";
import HeaderSection from "@/components/Section/HeaderSection";
import { IPostList } from "@/types/base";
const BLOG_TYPE = "posts";

async function getData(display: boolean) {
    const res = await getSortedPostData(BLOG_TYPE, display ? 4 : 100);
    return res;
}

const PostList: React.FC<IPostList> = async ({ display = false }) => {
    const data = await getData(display);
    return (
        <Section>
            <HeaderSection
                text="Recent Posts"
                href={display ? "/posts" : undefined}
            />
            <div className={`grid grid-cols-1 gap-4`}>
                {data.map((item) => {
                    return <ItemPost key={item.slug} {...item} />;
                })}
            </div>
        </Section>
    );
};

export default PostList;
