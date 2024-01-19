import React from "react";
import BaseSection from "@/components/section/BaseSection";
import { getSortedPostData } from "@/lib/blogs";
import ItemPost from "@/components/item/ItemPost";
import HeaderSection from "@/components/section/HeaderSection";
import { IPostList } from "@/types/base";
const BLOG_TYPE = "posts";

async function getData(display: boolean) {
    const res = await getSortedPostData(BLOG_TYPE, display ? 4 : 100);
    return res;
}

const PostList: React.FC<IPostList> = async ({ display = false }) => {
    const data = await getData(display);
    return (
        <BaseSection>
            <HeaderSection href={display ? "/posts" : undefined}>
                Recent Posts
            </HeaderSection>
            <div className={`grid grid-cols-1 gap-4`}>
                {data.map((item) => {
                    return <ItemPost key={item.slug} {...item} />;
                })}
            </div>
        </BaseSection>
    );
};

export default PostList;
