"use client"
import React, { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { cubicBezier, motion } from "framer-motion";
import Link from "next/link";
import { MenuItem } from "@/types/base";
import { Logo } from "@/components/ui/brand";
import ThemeSwitch from "@/components/ui/switch/theme-switch";
import { useTheme } from "next-themes";

interface INavbarItemProps {
    text: string;
    href: string;
}

interface INavbarDataProps {
    data: MenuItem[];
}

const NavbarItem: React.FC<INavbarItemProps> = ({ text, href }) => {
    const currentRoute = usePathname();
    const checkRoute =
        href === "/" ? currentRoute === "/" : currentRoute.startsWith(href);
    const bgActive = checkRoute ? "border-b-white" : "border-b-transparent";

    return (
        <li className="w-full h-full items-center justify-center flex">
            <Link
                className={`text-xs uppercase transition-all font-semibold tracking-wider w-full md:w-auto text-center group flex flex-col`}
                href={href}
            >
                <div className="rounded-md group-hover:text-[#f55e8e] group-hover:bg-adaptive-invert group-hover:bg-opacity-20 p-4 md:p-2 drop-shadow-md">
                    {text}
                </div>
            </Link>
        </li>
    );
};

const NavbarList: React.FC<INavbarDataProps> = ({ data }) => {
    return (
        <ul className="md:flex-row flex-col md:w-auto md:divide-none divide-y divide-adaptive w-full h-full md:gap-2 flex px-4 md:px-2">
            {data.map((item) => (
                <NavbarItem key={item.name} text={item.name} href={item.path} />
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
        <header className="w-full flex flex-col justify-center items-center fixed top-0 z-50">
            <div className="w-full max-w-screen-lg h-16 px-4 flex md:flex-row gap-4 justify-between md:justify-start items-center bg-opacity-80 backdrop-blur-lg dark:bg-opacity-80 bg-adaptive z-50 ">
                <Logo className="h-full" />
                <div className="md:block hidden">
                    <NavbarList data={data} />
                </div>

                <div className="flex-grow h-full flex flex-row items-center justify-end gap-2 ">
                    <ThemeSwitch/>
                    <button className="md:hidden" onClick={toggleOpen}>
                        <List className="p-1"size={36} weight="bold" />
                    </button>
                </div>
            </div>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -90 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -90 }}
                    transition={{ ease: cubicBezier(0.35, 0.17, 0.3, 0.86) }}
                    className="md:hidden h-full w-full bg-adaptive border border-adaptive rounded-b-xl backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 z-40"
                >
                    <NavbarList data={data} />
                </motion.div>
            )}
        </header>
    );
};
