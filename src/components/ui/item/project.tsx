import { IBlog } from "@/model/Blog";
import { BlogMetadata, ProjectType } from "@/types/blogs";
import { GameController, Globe, PushPin } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ItemProject = (blog: IBlog) => {
    const {
        blogType,
        imageUrl,
        title,
        category,
        createdAt,
        pinned,
        slug,
        description,
    } = blog;
    return (
        <Link
            className="border border-fore dark:border-fore-dark border-opacity-30 dark:border-opacity-10 rounded-lg hover:shadow-xl bg-surface-adaptive active:bg-neutral-500 transition-all flex flex-col items-center hover:border-fore hover:dark:border-fore-dark overflow-clip"
            href={`/${blogType}/${slug}`}
        >
            <div className="aspect-video object-cover w-full relative">
                <div className="absolute p-4 flex flex-row gap-4 items-center justify-between w-full z-10 bottom-0">
                    <div className="flex-grow">
                        <h3 className="text-lg font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] drop">
                            {title}
                        </h3>
                        {description && (
                            <p className="text-sm line-clamp-1 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className="p-2 bg-white rounded-md">
                        <ProjectTypeIcon projectType={category} />
                    </div>
                </div>
                {imageUrl && (
                    <Image
                        unoptimized //remove to optimize
                        className="aspect-video object-cover w-full"
                        alt={title}
                        src={imageUrl}
                        width={400}
                        height={225}
                    />
                )}
                {pinned && (
                    <PushPin
                        className="absolute top-0 right-0 m-2 bg-white rounded-md p-1 w-6 h-6 bg-adaptive"
                        weight="fill"
                    />
                )}
            </div>
        </Link>
    );
};

export const ProjectTypeIcon = ({
    projectType = "web",
}: {
    projectType?: string;
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
