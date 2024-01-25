// ButtonComponent.tsx
import { IButtonProps } from "@/types/base";
import React from "react";
import { BaseButton } from ".";

interface IStyledButtonProps extends IButtonProps {
    style: "primary" | "secondary" | "danger";
}

export const StyledButton: React.FC<IStyledButtonProps> = ({
    children,
    className,
    onClick,
    href,
    style,
    type,
}) => {
    let baseClassName;
    switch (style) {
        case "primary":
            baseClassName = "bg-adaptive-invert text-adaptive-invert";
            break;
        case "secondary":
            baseClassName = "bg-surface-adaptive text-surface-adaptive";
            break;
    }

    return (
        <BaseButton
            className={`${className} ${baseClassName}`}
            type={type}
            onClick={onClick}
            href={href}
        >
            {children}
        </BaseButton>
    );
};
