"use client";
import React from "react";
import PrimaryButton from "../../template/PrimaryButton";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";

const AddBlogButton = () => {
    const onClickAdd = () => {
        console.log("Add clicked!");
    };
    return (
        <PrimaryButton className="flex flex-row items-center justify-center gap-1" onClick={onClickAdd}>
            <PlusCircle weight="bold" className="w-6 h-6" size={32} />
            New Blog
        </PrimaryButton>
    );
};

export default AddBlogButton;
