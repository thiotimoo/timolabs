"use client"
import React from "react";
import { Logo } from "../../brand";
import { ArrowLeft, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { StyledButton } from "../../button";
import BackButton from "../../button/back-button";
import PublishBlogButton from "./publish-blog-button";

interface IEditorTopBarProps {
    title: string,
    onTitleChange: React.ChangeEventHandler<HTMLInputElement>,
    onPublishClick: React.MouseEventHandler<HTMLButtonElement>
}

export const EditorTopBar:React.FC<IEditorTopBarProps> = ({title, onTitleChange, onPublishClick}) => {
    
    return (
        <header className="bg-surface-adaptive h-16">
            <div className="w-full h-16 px-4 flex md:flex-row gap-4 justify-between items-center m-auto">
                <div className="h-full flex flex-row gap-2 w-full">
                    <BackButton parentHref="/admin/blogs"/>
                    <div className="h-full flex flex-col justify-center md:w-1/2">
                        <input className="bg-transparent outline-none text-2xl text-ellipsis w-full" placeholder="(untitled)" onChange={onTitleChange} value={title}/>
                        <p>Last edited at </p>
                    </div>
                    {/* <Logo className="h-full" /> */}
                </div>
                <PublishBlogButton onPublishClick={onPublishClick}/>
            </div>
        </header>
    );
};
