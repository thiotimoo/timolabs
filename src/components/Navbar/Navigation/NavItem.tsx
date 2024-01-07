"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UrlObject } from "url";

interface ItemProps {
    text: string;
    href: string | UrlObject;
}

const NavItem: React.FC<ItemProps> = ({ text, href }) => {
    const currentRoute = usePathname();
    const bgActive =
        currentRoute == href
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

export default NavItem;
