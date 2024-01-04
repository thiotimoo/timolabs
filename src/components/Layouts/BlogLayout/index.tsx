import { formatDateLong, formatDateShort } from "@/lib/utils";
import { IBlogLayoutProps } from "@/types/blogs";
import Image from "next/image";
import React from "react";

const BlogLayout: React.FC<IBlogLayoutProps> = ({
    children,
    className,
    frontMatter,
}) => {
    return (
        <article className="flex flex-col gap-6 p-6">
            {frontMatter.thumbnail_url && (
                <Image
                    className="aspect-video rounded-xl w-full"
                    src={frontMatter.thumbnail_url}
                    alt={frontMatter.title}
                    width={1280}
                    height={720}
                />
            )}
            <header>
                <time
                    className="text-lg text-primary"
                    dateTime={formatDateShort(frontMatter.date)}
                >
                    {formatDateLong(frontMatter.date)}
                </time>
                <h1 className="text-5xl font-space font-bold">
                    {frontMatter.title}
                </h1>
            </header>
            {children}
        </article>
    );
};

export default BlogLayout;
