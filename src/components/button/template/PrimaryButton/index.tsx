"use client"
import { IButtonProps } from "@/types/base";
import React from "react";
import BaseButton from "../BaseButton";

const PrimaryButton: React.FC<IButtonProps> = ({
    children,
    className,
    onClick,
}) => {
    return (
        <BaseButton className={`${className} bg-adaptive-invert text-adaptive-invert`} onClick={onClick}>
            {children}
        </BaseButton>
    );
};

export default PrimaryButton;
