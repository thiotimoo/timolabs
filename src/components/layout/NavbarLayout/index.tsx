"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Logo from "../../design/Logo";
import { List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Props {
    className?: string;
}

const NavbarLayout: React.FC<Props> = ({ className }) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    return (
        <header
            className={`w-full flex flex-col justify-center items-center bg-surface dark:bg-surface-dark bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm border-b-2 border-opacity-10 dark:border-opacity-10 border-back dark:border-back-dark ${className}`}
        >
            <div
                className={`w-full max-w-screen-lg h-16 px-4 flex md:flex-row gap-4 justify-between items-center`}
            >
                <Logo className="h-full"/>
                <div className="md:block hidden">
                    <Navigation />
                </div>
                <div className="md:hidden h-full grid place-items-center ">
                    <button onClick={toggleOpen}>
                        <List size={32} weight="bold" />
                    </button>
                </div>
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="md:hidden h-full grid place-items-center w-full"
                >
                    <Navigation />
                </motion.div>
            )}
        </header>
    );
};

export default NavbarLayout;
