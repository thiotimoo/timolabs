import React from "react";
import { Logo } from "../../brand";
import { ArrowLeft, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { StyledButton } from "../../button";

export const EditorTopBar = () => {
    return (
        <header className="bg-surface-adaptive h-16">
            <div className="w-full h-16 px-4 flex md:flex-row gap-4 justify-between items-center m-auto">
                <div className="h-full flex flex-row gap-2">
                    <ArrowLeft
                        className="w-16 h-16 p-5"
                        size={32}
                        weight="bold"
                    />
                    <Logo className="h-full" />
                </div>
                <StyledButton
                    type="button"
                    className="flex flex-row gap-1 items-center justify-center"
                    style="primary"
                >
                    {" "}
                    <RocketLaunch weight="bold" className="w-6 h-6" size={32} />
                    Deploy
                </StyledButton>
            </div>
        </header>
    );
};
