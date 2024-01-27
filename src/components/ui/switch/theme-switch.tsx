"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    if (theme == "dark")
        return (
            <button  onClick={() => setTheme("light")} >
                <Sun className="p-1" weight="fill" size="36" alt="Light Mode"/>
            </button>
        );
    return (
        <button onClick={() => setTheme("dark")} >
            <Moon className="p-1" weight="fill" size="36" alt="Dark Mode" />
        </button>
    );
};

export default ThemeSwitch;
