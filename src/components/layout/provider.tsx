"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider } from "next-themes";

export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Next13ProgressBar
                height="2px"
                color="#FFFFFF"
                options={{ showSpinner: false }}
                showOnShallow
            />
            {children}
        </ThemeProvider>
    );
};
