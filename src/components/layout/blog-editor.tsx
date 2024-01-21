"use client";
import { EditorTopBar } from "@/components/ui/admin/editor";
import { MarkdownBuilder } from "@/components/ui/markdown";
import { updateBlog } from "@/lib/admin";
import { fetchBlogById } from "@/lib/blogs";
import { IBlog } from "@/model/Blog";
import { BlogType } from "@/types/blogs";
import { ObjectId } from "mongoose";
import { useRouter } from "next/navigation";
import React, { ChangeEventHandler, useEffect, useState } from "react";
interface IBlogEditorPage {
    blogType: BlogType;
    id: string;
}
export const BlogEditorPage: React.FC<IBlogEditorPage> = ({ id, blogType }) => {
    const router = useRouter();
    const [visibility, setVisibility] = useState("draft");
    const [markdown, setMarkdown] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [slug, setSlug] = useState("");
    const handleMarkdownChange: ChangeEventHandler<HTMLTextAreaElement> = (
        event
    ) => setMarkdown(event.target.value);
    const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setTitle(event.target.value);
    };
    const handleImageUrlChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setImageUrl(event.target.value);
    };
    const handleSlugChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setSlug(event.target.value);
    };
    const handleCategoryChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setCategory(event.target.value);
    };
    const onPublishClick: React.MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        const blog: IBlog = {
            title: title,
            bodyContent: markdown,
            blogType: blogType,
            imageUrl: imageUrl,
            slug: slug,
            category: category,
            visibility: "published",
            _id: id,
        };
        updateBlog(blog).then((response) => {
            if (response.statusCode == 200) {
                router.push("/admin/" + blogType);
            } else if (response.error) {
                alert(response.error);
            }
        });
    };

    const onSaveClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        const blog: IBlog = {
            title: title,
            bodyContent: markdown,
            blogType: blogType,
            imageUrl: imageUrl,
            slug: slug,
            category: category,
            visibility: "draft",
            _id: id,
        };
        updateBlog(blog).then((response) => {
            if (response.statusCode == 200) {
                // router.push("/admin/blogs");
                alert("Draft saved!");
            } else if (response.error) {
                alert(response.error);
            }
        });
    };
    const fetchData = async () => {
        const data = await fetchBlogById(blogType, id);
        if (data) {
            setVisibility(data.visibility);
            setMarkdown(data.bodyContent);
            setTitle(data.title);
            setImageUrl(data.imageUrl);
            setCategory(data.category);
            setSlug(data.slug);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="flex flex-col w-full h-full min-h-svh divide-y divide-adaptive ">
            <EditorTopBar
                onTitleChange={handleTitleChange}
                title={title}
                blogType={blogType}
                blogVisibility={visibility}
                onPublishClick={onPublishClick}
                onSaveClick={onSaveClick}
            />
            <main className="flex-1 flex flex-row divide-x divide-adaptive items-stretch">
                <div className="flex flex-col flex-1 bg-surface-adaptive ">
                    <input
                        className="bg-transparent outline-none text-2xl text-ellipsis w-full"
                        placeholder="(your-slug-here)"
                        prefix={"/" + blogType}
                        onChange={handleSlugChange}
                        value={slug}
                    />
                    <input
                        className="bg-transparent outline-none text-2xl text-ellipsis w-full"
                        placeholder="(image-url)"
                        onChange={handleImageUrlChange}
                        value={imageUrl}
                    />

                    <input
                        className="bg-transparent outline-none text-2xl text-ellipsis w-full"
                        placeholder="(category)"
                        onChange={handleCategoryChange}
                        value={category}
                    />

                    <textarea
                        className="p-4 resize-none outline-none bg-transparent w-full h-full"
                        onChange={handleMarkdownChange}
                        value={markdown}
                        placeholder="Write markdown..."
                    />
                </div>

                <div className="flex-1 w-full flex flex-col gap-6 p-6 items-center ">
                    <MarkdownBuilder markdownBody={markdown} />
                </div>
            </main>
        </div>
    );
};
