"use client";
import React, { useEffect, useState } from "react";
import { getSortedPostData } from "@/lib/blogs";
import { IProjectList } from "@/types/base";
import { HeaderSection, Section } from "@/components/layout/section";
import { ItemProject, ItemProjectSkeleton } from "../item";
const BLOG_TYPE = "works";

export const ProjectList: React.FC<IProjectList> = ({ data }) => {
    
    return (
        data && (
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 md:grid-rows-2`}
                >
                    {data.length
                        ? data.map((item: any) => {
                              return <ItemProject key={item.slug} {...item} />;
                          })
                        : (
                              <>
                                  <ItemProjectSkeleton />
                                  <ItemProjectSkeleton />
                                  <ItemProjectSkeleton />
                                  <ItemProjectSkeleton />
                              </>
                          )}
                </div>
        )
    );
};
