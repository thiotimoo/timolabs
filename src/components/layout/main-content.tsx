import { IContainerProps } from "@/types/base";
import React from "react";

export const MainContent: React.FC<IContainerProps> = ({ children, className }) => {
    return (
        <main
            className={`flex max-w-screen-md mt-16 flex-col w-full ${className}`}
        >
            {children}
        </main>
    );
};
