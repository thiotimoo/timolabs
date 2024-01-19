"use client";
import React, { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuItem } from "@/types/base";
import { Logo } from "@/components/ui/brand";

interface INavbarItemProps {
    text: string;
    href: string;
}

interface INavbarDataProps {
    data: MenuItem[];
}

const NavbarItem: React.FC<INavbarItemProps> = ({ text, href }) => {
    const currentRoute = usePathname();
    const checkRoute = href === "/" ? currentRoute === "/" : currentRoute.startsWith(href);
    const bgActive = checkRoute
        ? "bg-fore dark:bg-fore-dark text-back dark:text-back-dark"
        : "bg-transparent";

    return (
        <li className="w-full h-full items-center justify-center flex">
            <Link
                className={`text-sm uppercase px-4 py-1 hover:bg-opacity-20 hover:dark:bg-opacity-20 hover:bg-fore hover:dark:bg-fore-dark active:bg-fore active:dark:bg-fore-dark active:text-fore hover:text-fore active:dark:text-fore-dark hover:dark:text-fore-dark rounded-md transition-all font-semibold tracking-wider w-full md:w-auto text-center ${bgActive}`}
                href={href}
            >
                {text}
            </Link>
        </li>
    );
};

const NavbarList: React.FC<INavbarDataProps> = ({ data }) => {
    return (
        <ul className="flex-row md:w-auto w-full h-full gap-2 flex px-4 md:px-2 py-2">
            {data.map((item) => (
                <NavbarItem text={item.name} href={item.path} />
            ))}
        </ul>
    );
};

export const Navbar: React.FC<INavbarDataProps> = ({ data }) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    };
    useEffect(() => {
        setOpen(false);
    }, [pathname]);
    return (
        <header className="w-full flex flex-col justify-center items-center bg-surface dark:bg-surface-dark bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm border-b-2 border-opacity-10 dark:border-opacity-10 border-back dark:border-back-dark fixed z-50 top-0">
            <div className="w-full max-w-screen-lg h-16 px-4 flex md:flex-row gap-4 justify-between items-center">
                <Logo className="h-full" />
                <div className="md:block hidden">
                    <NavbarList data={data} />
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
                    <NavbarList data={data} />
                </motion.div>
            )}
        </header>
    );
};