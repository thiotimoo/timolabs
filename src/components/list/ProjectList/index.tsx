import React from "react";
import BaseSection from "@/components/section/BaseSection";
import ItemProject from "@/components/item/ItemProject";
import { getSortedPostData } from "@/lib/blogs";
import HeaderSection from "@/components/section/HeaderSection";
import { IProjectList } from "@/types/base";
const BLOG_TYPE = "projects";

async function getData(display: boolean) {
    const res = await getSortedPostData(BLOG_TYPE, display ? 4 : 100);
    return res;
}

const ProjectList: React.FC<IProjectList> = async ({ display = false }) => {
    const data = await getData(display);
    return (
        <BaseSection>
            <HeaderSection href={display ? "/projects" : undefined}>
                My Projects
            </HeaderSection>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                {data.map((item) => {
                    return <ItemProject key={item.slug} {...item} />;
                })}
            </div>
        </BaseSection>
    );
};

export default ProjectList;
