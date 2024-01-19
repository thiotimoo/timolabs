"use client";
import { IButtonProps } from "@/types/base";
import React from "react";

export const BaseButton: React.FC<IButtonProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <button className={`rounded-md px-3 py-2 text-lg font-semibold ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};
