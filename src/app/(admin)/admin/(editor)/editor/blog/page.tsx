"use client";
import { EditorTopBar } from "@/components/ui/admin/editor";
import { MarkdownBuilder } from "@/components/ui/markdown";
import { publishBlog } from "@/lib/admin";
import { IBlog } from "@/model/Blog";
import { useRouter } from "next/navigation";
import React, { ChangeEventHandler, useEffect, useState } from "react";

const BlogEditorPage = () => {
    const router = useRouter();
    const [markdown, setMarkdown] = useState("");
    const [title, setTitle] = useState("");
    const handleMarkdownChange: ChangeEventHandler<HTMLTextAreaElement> = (
        event
    ) => setMarkdown(event.target.value);
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setTitle(event.target.value);
    };
    const onPublishClick: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        const blog: IBlog = {
            title: title,
            bodyContent: markdown,
            blogType: "blogs",
            slug: title
        };
        publishBlog(blog).then((response) => {
            alert(response);
            if (response.statusCode == 200) {
                router.push("/admin/blogs");
            } else if (response.error) {
                alert(response.error);
            }
        });
    };
    return (
        <div className="flex flex-col w-full h-full min-h-svh divide-y divide-adaptive ">
            <EditorTopBar
                onTitleChange={handleTitleChange}
                title={title}
                onPublishClick={onPublishClick}
            />
            <main className="flex-1 flex flex-row divide-x divide-adaptive h-full">
                <textarea
                    className="flex-1 p-4 resize-none outline-none bg-surface-adaptive w-full overflow-y-scroll"
                    onChange={handleMarkdownChange}
                    value={markdown}
                    placeholder="Write markdown..."
                />
                <div className="flex-1 w-full flex flex-col gap-6 p-6 items-center overflow-y-scroll">
                    <MarkdownBuilder markdownBody={markdown} />
                </div>
            </main>
        </div>
    );
};

export default BlogEditorPage;
