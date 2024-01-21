"use client";
import React from "react";
import { Logo } from "../../brand";
import { ArrowLeft, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { StyledButton } from "../../button";
import BackButton from "../../button/back-button";
import { PublishBlogButton, SaveDraftButton } from ".";
import { BlogType, BlogVisibility } from "@/types/blogs";

interface IEditorTopBarProps {
    title: string;
    blogVisibility: string;
    blogType: BlogType;
    onTitleChange: React.ChangeEventHandler<HTMLInputElement>;
    onPublishClick: React.MouseEventHandler<HTMLButtonElement>;
    onSaveClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const EditorTopBar: React.FC<IEditorTopBarProps> = ({
    title,
    blogVisibility,
    blogType,
    onTitleChange,
    onPublishClick,
    onSaveClick,
}) => {
    return (
        <header className="bg-surface-adaptive h-16">
            <div className="w-full h-16 px-4 flex md:flex-row gap-4 justify-between items-center m-auto">
                <div className="h-full flex flex-row gap-2 w-full">
                    <BackButton parentHref={"/admin/"+blogType} />
                    <div className="h-full flex flex-col justify-center md:w-1/2">
                        <input
                            className="bg-transparent outline-none text-2xl text-ellipsis w-full"
                            placeholder="(untitled)"
                            onChange={onTitleChange}
                            value={title}
                        />
                        <p>Last edited at </p>
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
