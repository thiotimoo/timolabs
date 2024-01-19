// ButtonComponent.tsx
import { IButtonProps } from "@/types/base";
import React from "react";
import { BaseButton } from ".";

interface IStyledButtonProps extends IButtonProps {
    baseClassName: string;
}

const StyledButton: React.FC<IStyledButtonProps> = ({
    children,
    className,
    onClick,
    baseClassName,
}) => {
    return (
        <BaseButton
            className={`${className} ${baseClassName}`}
            onClick={onClick}
        >
            {children}
        </BaseButton>
    );
};

export const PrimaryButton: React.FC<IButtonProps> = (props) => {
    return (
        <StyledButton
            {...props}
            baseClassName="bg-adaptive-invert text-adaptive-invert"
        />
    );
};

export const SecondaryButton: React.FC<IButtonProps> = (props) => {
    return (
        <StyledButton
            {...props}
            baseClassName="bg-surface-adaptive text-surface-adaptive"
        />
    );
};
