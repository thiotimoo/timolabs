import React from "react";
import Section from "../../Section/BaseSection";
import { UrlObject } from "url";
import Link from "next/link";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import ItemProject from "@/components/Items/ItemProject";
import { getSortedPostData } from "@/lib/blogs";
import HeaderSection from "@/components/Section/HeaderSection";
import { IProjectList } from "@/types/base";
const BLOG_TYPE = "projects";

async function getData(display: boolean) {
    const res = await getSortedPostData(BLOG_TYPE, display ? 4 : 100);
    return res;
}

const ProjectList: React.FC<IProjectList> = async ({ display = false }) => {
    const data = await getData(display);
    return (
        <Section>
            <HeaderSection
                text="My Projects"
                href={display ? "/projects" : undefined}
            />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                {data.map((item) => {
                    return <ItemProject key={item.slug} {...item} />;
                })}
            </div>
        </Section>
    );
};

export default ProjectList;
