"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Next13ProgressBar
                height="2px"
                color="#FFFFFF"
                options={{ showSpinner: false }}
                showOnShallow
            />
            {children}
        </>
    );
};
