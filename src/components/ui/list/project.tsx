"use client"
import React, { useEffect, useState } from "react";
import { getSortedPostData } from "@/lib/blogs";
import { IProjectList } from "@/types/base";
import { HeaderSection, Section } from "@/components/layout/section";
import { ItemProject } from "../item";
const BLOG_TYPE = "works"

export const ProjectList: React.FC<IProjectList> = ({ display = false }) => {
    const [data,setData] = useState([])
    const fetchData = async () => {
        setData(await getSortedPostData(BLOG_TYPE, display ? 4 : 100));
    };
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Section>
            <HeaderSection href={display ? "/works" : undefined}>
                My Projects
            </HeaderSection>
            <div className={`grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6`}>
                {data.map((item: any) => {
                    return <ItemProject key={item.slug} {...item} />;
                })}
            </div>
        </Section>
    );
};
