import React from "react";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { StyledButton } from "../button";

export const AddBlogButton = () => {
    return (
        <StyledButton style="primary" type="link" className="flex flex-row items-center justify-center gap-1" href="/admin/editor/blog">
            <PlusCircle weight="bold" className="w-6 h-6" size={32} />
            New Blog
        </StyledButton>
    );
};