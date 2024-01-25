"use client";
import { IButtonProps } from "@/types/base";
import Link from "next/link";
import React from "react";

export const BaseButton: React.FC<IButtonProps> = ({
    children,
    className,
    onClick,
    href = "/",
    type,
}) => {
    const btnClassName = `rounded-md px-3 py-2 text-lg font-semibold ${className}`;
    return (
        (type == "button") ?
        <button className={btnClassName} onClick={onClick}>
            {children}
        </button>
        :
        <Link className={btnClassName} href={href}>
            {children}
        </Link>
    );
};
