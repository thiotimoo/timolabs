import { IBlog } from "@/model/Blog";
import { BlogMetadata, ProjectType } from "@/types/blogs";
import { GameController, Globe, PushPin } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ItemProjectSkeleton = () => {
    return (
        <div
            className="border-2 border-transparent border-opacity-30 dark:border-opacity-10 rounded-xl bg-surface-adaptive active:bg-neutral-500 flex flex-col items-center hover:border-fore hover:dark:border-fore-dark overflow-clip group aspect-video w-full"
        />
    );
};

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
            className="border-2 border-transparent border-opacity-30 dark:border-opacity-10 rounded-xl bg-surface-adaptive active:bg-neutral-500 flex flex-col items-center hover:border-fore hover:dark:border-fore-dark overflow-clip group"
            href={`/${blogType}/${slug}`}
        >
            <div className="aspect-video object-cover w-full relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:opacity-90 transition-all to-black opacity-70 z-10 w-full h-full group-active:bg-black"></div>
                <div className="absolute p-4 flex flex-row gap-4 items-center justify-between w-full z-20 bottom-0">
                    <div className="flex-grow text-white">
                        <h3 className="text-lg font-black drop-shadow-[0_2px_2px_rgba(0,0,0,1)] drop">
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
