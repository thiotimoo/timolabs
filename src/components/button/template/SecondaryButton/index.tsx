"use client";
import { IButtonProps } from "@/types/base";
import React from "react";
import BaseButton from "../BaseButton";

const SecondaryButton: React.FC<IButtonProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <BaseButton
            className={`${className} bg-surface-adaptive text-surface-adaptive`}
            onClick={onClick}
        >
            {children}
        </BaseButton>
    );
};

export default SecondaryButton;
