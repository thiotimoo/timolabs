"use client";
import React from "react";
import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { PrimaryButton } from "../button";

export const AddBlogButton = () => {
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