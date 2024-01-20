"use client";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React from "react";

interface IBackButton {
    parentHref?: string;
}

const BackButton: React.FC<IBackButton> = ({ parentHref }) => {
    const router = useRouter();
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (parentHref) router.replace(parentHref);
        else router.back();
    };
    return (
        <button onClick={handleClick}>
            <ArrowLeft className="w-16 h-16 p-5" size={32} weight="bold" />
        </button>
    );
};

export default BackButton;
