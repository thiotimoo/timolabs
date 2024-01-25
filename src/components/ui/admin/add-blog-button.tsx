'use client'
import React from "react";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { StyledButton } from "../button";
import { IBlog } from "@/model/Blog";
import { updateBlog } from "@/lib/admin";
import { useRouter } from "next/navigation";
import { BlogType } from "@/types/blogs";
interface IAddBlogButtonProps {
    blogType: BlogType
}
export const AddBlogButton:React.FC<IAddBlogButtonProps> = ({blogType}) => {
    const router = useRouter();
    const handleClick = () => {
        const blog: IBlog = {
            title: "",
            bodyContent: "",
            blogType: blogType,
            slug: "",
            visibility: "draft"
        };
        updateBlog(blog).then((response) => {
            if (response.statusCode == 200) {
                router.push("/admin/editor/"+blogType+"/"+response.data._id);
            } else if (response.error) {
                alert(response.error);
            }
        });
    }
    return (
        <StyledButton style="primary" type="button" onClick={handleClick} className="flex flex-row items-center justify-center gap-1" href="/admin/editor/blog">
            <PlusCircle weight="bold" className="w-6 h-6" size={32} />
            New Blog
        </StyledButton>
    );
};