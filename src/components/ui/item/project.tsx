import { BlogMetadata, ProjectType } from "@/types/blogs";
import {
    GameController,
    Globe,
    PushPin,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ItemProject = (blog: BlogMetadata) => {
    const { frontMatter, slug, blogType } = blog;
    return (
        <Link
            className="border-2 border-fore dark:border-fore-dark border-opacity-30 dark:border-opacity-10 rounded-lg hover:shadow-xl bg-surface-adaptive active:bg-neutral-500 transition-all flex flex-col items-center hover:dark:shadow-neutral-700 hover:shadow-neutral-500 hover:ring-fore hover:dark:ring-fore-dark hover:ring-2 overflow-clip hover:-translate-y-1"
            href={`/${blogType}/${slug}`}
        >
            <div className="aspect-video object-cover w-full relative">
                <Image
                unoptimized //remove to optimize
                    className="aspect-video object-cover w-full"
                    alt={frontMatter.title}
                    src={frontMatter.thumbnail_url}
                    width={400}
                    height={225}
                />
                {frontMatter.pinned && (
                    <PushPin
                        className="absolute top-0 right-0 m-2 bg-white rounded-md p-1 w-6 h-6 bg-adaptive"
                        weight="fill"
                    />
                )}
            </div>
            <div className="p-4 flex flex-row gap-4 items-center justify-between w-full">
                <div className="flex-grow">
                    <h3 className="text-xl font-bold">{frontMatter.title}</h3>
                    <p>{frontMatter.description}</p>
                </div>
                <div className="p-2 bg-green-400 rounded-md border-2 border-black     border-opacity-20">
                    <ProjectTypeIcon projectType={frontMatter.project_type} />
                </div>
            </div>
        </Link>
    );
};

export const ProjectTypeIcon = ({
    projectType = "web",
}: {
    projectType: ProjectType;
}) => {
    switch (projectType) {
        case "game":
            return (
                <GameController
                    className="fill-black"
                    size={24}
                    weight="bold"
                />
            );
        case "web":
            return <Globe className="fill-black" size={24} weight="bold" />;
    }
};
