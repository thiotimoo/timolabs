"use client";
import { formatDateLong, formatDateShort } from "@/lib/utils";
import { IBlogLayoutProps } from "@/types/blogs";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { StyledButton } from "../ui/button";
import {
    ArrowSquareOut,
    Download,
    GithubLogo,
} from "@phosphor-icons/react/dist/ssr";

export const Article: React.FC<IBlogLayoutProps> = ({ children, blogData }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex flex-col gap-6 p-6 items-center w-full"
        >
            {blogData.imageUrl && (
                <Image
                    unoptimized //remove to optimize
                    className="aspect-video rounded-xl w-full object-cover"
                    src={blogData.imageUrl}
                    alt={blogData.title}
                    width={1280}
                    height={720}
                />
            )}
            <header className="w-full flex flex-col md:flex-row items-center gap-1">
                <div className="w-full flex-1 flex flex-col">
                    {blogData.createdAt && (
                        <time
                            className="text-lg text-primary font-mono"
                            dateTime={formatDateShort(
                                blogData?.createdAt?.toString()
                            )}
                        >
                            {formatDateLong(blogData?.createdAt?.toString())}
                        </time>
                    )}
                    <h1 className="text-5xl font-space font-black">
                        {blogData.title}
                    </h1>
                </div>
                {blogData.metadata?.repoUrl && (
                    <StyledButton
                        style="secondary"
                        type="link"
                        className="flex flex-row items-center gap-2"
                        href={blogData.metadata?.repoUrl}
                    >
                        <GithubLogo weight="bold" />
                        Repo
                    </StyledButton>
                )}
                {blogData.metadata?.visitUrl && (
                    <StyledButton
                        style="primary"
                        type="link"
                        className="flex flex-row items-center gap-2"
                        href={blogData.metadata?.visitUrl}
                    >
                        <ArrowSquareOut weight="bold" />
                        Visit Site
                    </StyledButton>
                )}
                {blogData.metadata?.downloadUrl && (
                    <StyledButton
                        style="primary"
                        type="link"
                        className="flex flex-row items-center gap-2"
                        href={blogData.metadata?.downloadUrl}
                    >
                        <Download weight="bold" />
                        Download
                    </StyledButton>
                )}
            </header>
            {children}
        </motion.article>
    );
};
