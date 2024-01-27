"use client";
import React, { useEffect, useState } from "react";
import { getSortedPostData } from "@/lib/blogs";
import { IPostList } from "@/types/base";
import { HeaderSection, Section } from "../../layout/section";
import { ItemPost } from "../item";
const BLOG_TYPE = "blogs";

export const PostList: React.FC<IPostList> = ({ data }) => {
    return (
        <div className={`grid grid-cols-1 divide-y divide-adaptive`}>
            {data.map((item: any) => {
                return <ItemPost key={item.slug} {...item} />;
            })}
        </div>
    );
};
