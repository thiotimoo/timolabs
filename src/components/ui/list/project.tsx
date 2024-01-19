import React from "react";
import { getSortedPostData } from "@/lib/blogs";
import { IProjectList } from "@/types/base";
import { HeaderSection, Section } from "@/components/layout/section";
import { ItemProject } from "../item";
const BLOG_TYPE = "works";

async function getData(display: boolean) {
    const res = await getSortedPostData(BLOG_TYPE, display ? 4 : 100);
    return res;
}

export const ProjectList: React.FC<IProjectList> = async ({ display = false }) => {
    const data = await getData(display);
    return (
        <Section>
            <HeaderSection href={display ? "/works" : undefined}>
                My Projects
            </HeaderSection>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                {data.map((item) => {
                    return <ItemProject key={item.slug} {...item} />;
                })}
            </div>
        </Section>
    );
};
