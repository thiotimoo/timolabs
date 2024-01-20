"use client";
import React from "react";
import { StyledButton } from "../../button";
import { RocketLaunch } from "@phosphor-icons/react/dist/ssr";
interface IPublishBlogButtonProps {
    onPublishClick: React.MouseEventHandler<HTMLButtonElement>;
}
const PublishBlogButton: React.FC<IPublishBlogButtonProps> = ({ onPublishClick }) => {
    return (
        <StyledButton
            type="button"
            className="flex flex-row gap-1 items-center justify-center"
            style="primary"
            onClick={onPublishClick}
        >
            <RocketLaunch weight="bold" className="w-6 h-6" size={32} />
            Publish
        </StyledButton>
    );
};

export default PublishBlogButton;
