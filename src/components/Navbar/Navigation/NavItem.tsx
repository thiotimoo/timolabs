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
        <li className=" w-full h-full items-center justify-center flex">
            <Link
                className={`text-base lowercase h-full px-3 py-1  active:transition-none hover:ring-2 hover:ring-fore hover:dark:ring-fore-dark active:bg-fore active:dark:bg-fore-dark active:text-back active:dark:text-back-dark rounded-full transition-all font-space font-bold ${bgActive}`}
                href={href}
            >
                {text}
            </Link>
        </li>
    );
};

export default NavItem;
