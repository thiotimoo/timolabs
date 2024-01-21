"use client";
import React from "react";
import { Logo } from "../../brand";
import { ArrowLeft, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { StyledButton } from "../../button";
import BackButton from "../../button/back-button";
import { PublishBlogButton, SaveDraftButton } from ".";
import { BlogType, BlogVisibility } from "@/types/blogs";

interface IEditorTopBarProps {
    slug: string;
    onSlugChange: React.ChangeEventHandler<HTMLInputElement>;
    blogVisibility: string;
    blogType: BlogType;
    onPublishClick: React.MouseEventHandler<HTMLButtonElement>;
    onSaveClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const EditorTopBar: React.FC<IEditorTopBarProps> = ({
    slug,
    onSlugChange,
    blogVisibility,
    blogType,
    onPublishClick,
    onSaveClick,
}) => {
    return (
        <header className="bg-surface-adaptive h-16">
            <div className="w-full h-16 px-4 flex md:flex-row gap-4 justify-between items-center m-auto">
                <div className="h-full flex flex-row gap-2 w-full">
                    <BackButton parentHref={"/admin/" + blogType} />
                    <div className="h-full flex flex-row justify-center items-center gap-2">
                        {blogType}
                        <span className="p-2 text-neutral-500">/</span>
                        <input
                            className="outline-none bg-adaptive text-ellipsis px-2 w-auto rounded-md"
                            placeholder="(your-slug-here)"
                            onChange={onSlugChange}
                            value={slug}
                        />
                    </div>
                    {/* <Logo className="h-full" /> */}
                </div>
                <div className=" flex flex-row gap-2">
                    {blogVisibility === "draft" && (
                        <SaveDraftButton onClick={onSaveClick} />
                    )}
                    <PublishBlogButton onClick={onPublishClick} />
                </div>
            </div>
        </header>
    );
};
