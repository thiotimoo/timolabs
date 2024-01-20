"use client";
import { MarkdownBuilder } from "@/components/ui/markdown";
import React, { ChangeEventHandler, useState } from "react";

const BlogEditorPage = () => {
    const [markdown, setMarkdown] = useState("");
    const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (
        event
    ) => {
        setMarkdown(event.target.value);
    };
    return (
        <main className="flex-1 flex flex-row divide-x divide-adaptive h-full">
            <textarea
                    className="flex-1 p-4 resize-none outline-none bg-surface-adaptive w-full overflow-y-scroll"
                    onChange={handleTextChange}
                    placeholder="Write something..."
                />
            <div className="flex-1 w-full flex flex-col gap-6 p-6 items-center overflow-y-scroll">
                <MarkdownBuilder markdownBody={markdown} />
            </div>
        </main>
    );
};

export default BlogEditorPage;
