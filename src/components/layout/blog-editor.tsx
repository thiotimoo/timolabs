    "use client";
    import { EditorTopBar } from "@/components/ui/admin/editor";
    import { MarkdownBuilder } from "@/components/ui/markdown";
    import { fetchBlogById, removeBlog, updateBlog } from "@/lib/admin";
    import { IBlog } from "@/model/Blog";
    import { BlogType } from "@/types/blogs";
    import { ObjectId } from "mongoose";
    import { useRouter } from "next/navigation";
    import React, { ChangeEventHandler, useEffect, useState } from "react";
    import { Article } from ".";
    import { Image, Paragraph, Tag } from "@phosphor-icons/react/dist/ssr";
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
        const [description, setDescription] = useState("");
        const [imageUrl, setImageUrl] = useState("");
        const [slug, setSlug] = useState("");

        const [blogData, setBlogData] = useState({
            title: title,
            bodyContent: markdown,
            description: description,
            blogType: blogType,
            imageUrl: imageUrl,
            slug: slug,
            category: category,
            visibility: visibility,
            _id: id,
        });

        const handleMarkdownChange: ChangeEventHandler<HTMLTextAreaElement> = (
            event
        ) => setMarkdown(event.target.value);
        const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (
            event
        ) => setDescription(event.target.value);
        const handleTitleChange: React.ChangeEventHandler<HTMLInputElement> = (
            event
        ) => {
            setSlug(event.target.value.toLowerCase().replaceAll(" ", "-"));
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
            setVisibility("published");
            blogData.visibility = "published"
            updateBlog(blogData).then((response) => {
                if (response.statusCode == 200) {
                    router.push("/admin/" + blogType);
                } else if (response.error) {
                    alert(response.error);
                }
            });
        };

        const onSaveClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
            updateBlog(blogData).then((response) => {
                if (response.statusCode == 200) {
                    // router.push("/admin/blogs");
                    alert("Draft saved!");
                } else if (response.error) {
                    alert(response.error);
                }
            });
        };

        const onRemoveClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
            removeBlog(id).then((response) => {
                if (response.statusCode == 200) {
                    router.push("/admin/" + blogType);
                } else if (response.error) {
                    alert(response.error);
                }
            });
        };

        const fetchData = async () => {
            const data = await fetchBlogById(blogType, id);
            if (data) {
                setDescription(data.description);
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
        const updateBlogData = () => {
            const blog = {
                title: title,
                bodyContent: markdown,
                blogType: blogType,
                imageUrl: imageUrl,
                slug: slug,
                category: category,
                description: description,
                visibility: visibility,
                _id: id,
            };
            setBlogData(blog);
        }
        useEffect(() => {
            updateBlogData();
        }, [title, markdown, blogType, imageUrl, slug, category, visibility, description]);
        return (
            <div className="flex flex-col w-full h-full min-h-svh divide-y divide-adaptive ">
                <EditorTopBar
                    onSlugChange={handleSlugChange}
                    slug={slug}
                    blogType={blogType}
                    blogVisibility={visibility}
                    onPublishClick={onPublishClick}
                    onSaveClick={onSaveClick}
                    onRemoveClick={onRemoveClick}
                />
                <main className="flex-1 flex flex-row divide-x divide-adaptive items-stretch">
                    <div className="flex flex-col flex-1 bg-surface-adaptive p-6 gap-2">
                        <input
                            className="bg-transparent outline-none text-5xl font-space font-bold text-ellipsis w-full px-4"
                            placeholder="(untitled)"
                            onChange={handleTitleChange}
                            value={title}
                        />

                        <div className={`relative block mx-2`}>
                            <Tag
                                className="absolute m-auto bottom-0 top-0 start-0 flex ms-3 w-5"
                                size={32}
                                weight="bold"
                            />
                            <input
                                className="bg-adaptive text-adaptive rounded-md p-2 ps-10 text-lg w-full text-ellipsis"
                                value={category}
                                onChange={handleCategoryChange}
                                placeholder="Category"
                            />
                        </div>

                        <div className={`relative block mx-2`}>
                            <Image
                                className="absolute m-auto bottom-0 top-0 start-0 flex ms-3 w-5"
                                size={32}
                                weight="bold"
                            />
                            <input
                                className="bg-adaptive text-adaptive rounded-md p-2 ps-10 text-lg w-full text-ellipsis"
                                value={imageUrl}
                                onChange={handleImageUrlChange}
                                placeholder="Image URL"
                            />
                        </div>

                        <div className={`relative block mx-2`}>
                            <Paragraph
                                className="absolute m-auto bottom-0 top-0 start-0 flex ms-3 w-5"
                                size={32}
                                weight="bold"
                            />
                            <input
                                className="bg-adaptive text-adaptive rounded-md p-2 ps-10 text-lg w-full text-ellipsis"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="Description"
                            />  
                        </div>

                        <textarea
                            className="px-4 resize-none outline-none bg-transparent w-full h-full"
                            onChange={handleMarkdownChange}
                            value={markdown}
                            placeholder="Write markdown..."
                        />
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-6 p-6 items-center ">
                        {blogData && (
                            <Article blogData={blogData}>
                                <MarkdownBuilder markdownBody={markdown} />
                            </Article>
                        )}
                    </div>
                </main>
            </div>
        );
    };
