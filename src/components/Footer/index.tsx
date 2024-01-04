import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
interface LinkType {
    href: string | UrlObject;
    text: string;
}
const LinkFooter: React.FC<LinkType> = ({ href, text }) => {
    return (
        <li>
            <Link className="opacity-50 hover:opacity-100" href={href}>{text}</Link>
        </li>
    );
};

const Footer = () => {
    return (
        <footer className="border-t-2 border-t-fore dark:border-t-fore-dark border-opacity-10 dark:border-opacity-10 w-full max-w-screen-md my-12 p-6 gap-2 flex flex-col items-start">
                <ul className="flex flex-row gap-4">
                    <LinkFooter text="/linktree" href="/linktree" />
                    <LinkFooter text="/uses" href="/uses" />
                </ul>
                <Link className="opacity-50 hover:opacity-100" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA 4.0</Link>
        </footer>
    );
};

export default Footer;
