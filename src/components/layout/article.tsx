"use client";
import { formatDateLong, formatDateShort } from "@/lib/utils";
import { IBlogLayoutProps } from "@/types/blogs";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Article: React.FC<IBlogLayoutProps> = ({
    children,
    frontMatter,
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex flex-col gap-6 p-6 items-center"
        >
            {frontMatter.thumbnail_url && (
                <Image
                    unoptimized //remove to optimize
                    className="aspect-video rounded-xl w-full object-cover"
                    src={frontMatter.thumbnail_url}
                    alt={frontMatter.title}
                    width={1280}
                    height={720}
                />
            )}
            <header className="w-full p-2">
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
        </motion.article>
    );
};