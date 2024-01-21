import React from "react";
import { StyledButton } from "../../button";
import { FloppyDisk, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
interface IPublishBlogButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const PublishBlogButton: React.FC<IPublishBlogButtonProps> = ({ onClick }) => {
    return (
        <StyledButton
            type="button"
            className="flex flex-row gap-1 items-center justify-center"
            style="primary"
            onClick={onClick}
        >
            <RocketLaunch weight="bold" className="w-6 h-6" size={32} />
            Publish
        </StyledButton>
    );
};

interface ISaveDraftBlogProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const SaveDraftButton: React.FC<ISaveDraftBlogProps> = ({ onClick }) => {
    return (
        <StyledButton
            type="button"
            className="flex flex-row gap-1 items-center justify-center"
            style="secondary"
            onClick={onClick}
        >
            <FloppyDisk weight="bold" className="w-6 h-6" size={32} />
            Save
        </StyledButton>
    );
};