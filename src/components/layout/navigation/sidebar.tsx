"use client";
import React, { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuItem } from "@/types/base";
import { Logo } from "@/components/ui/brand";

interface ISidebarItemProps {
    text: string;
    href: string;
}

interface ISidebarDataProps {
    data: MenuItem[];
}

const SidebarItem: React.FC<ISidebarItemProps> = ({ text, href }) => {
    const currentRoute = usePathname();
    const checkRoute = href === "/" ? currentRoute === "/" : currentRoute.startsWith(href);
    const bgActive = checkRoute
            ? "bg-fore dark:bg-fore-dark text-back dark:text-back-dark"
            : "bg-transparent";

    return (
        <li className="w-full items-center justify-center flex">
            <Link
                className={`text-sm uppercase px-4 py-3 hover:bg-opacity-20 hover:dark:bg-opacity-20 hover:bg-fore hover:dark:bg-fore-dark active:bg-fore active:dark:bg-fore-dark active:text-fore hover:text-fore active:dark:text-fore-dark hover:dark:text-fore-dark rounded-md transition-all font-semibold tracking-wider w-full text-start ${bgActive}`}
                href={href}
            >
                {text}
            </Link>
        </li>
    );
};

const SidebarList: React.FC<ISidebarDataProps> = ({ data }) => {
    return (
        <ul className="flex-col w-full gap-2 flex px-4 md:px-2 py-2">
            {data.map((item) => (
                <SidebarItem key={item.name} text={item.name} href={item.path} />
            ))}
        </ul>
    );
};

export const Sidebar: React.FC<ISidebarDataProps> = ({ data }) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    return (
        <aside className="flex flex-col items-start bg-surface dark:bg-surface-dark border-r-2 border-back dark:border-back-dark md:w-72 w-full">
            <div className="w-full max-w-screen-lg h-16 px-4 flex flex-row md:flex-col md:justify-start md:items-start justify-between items-center">
                <Logo className="md:p-6" />
                <div className="md:block hidden w-full">
                    <SidebarList data={data} />
                </div>
                
                <div className="md:hidden h-full grid place-items-center ">
                    <button onClick={toggleOpen}>
                        <List size={32} weight="bold" />
                    </button>
                </div>
                
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    className="md:hidden h-full grid place-items-center w-full"
                >
                    <SidebarList data={data} />
                </motion.div>
            )}
        </aside>
    );
};