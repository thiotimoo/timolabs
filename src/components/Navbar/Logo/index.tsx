import { BracketsCurly } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link className="flex flex-row items-center text-2xl gap-2 text-adaptive h-full" href="/">
            <BracketsCurly className="h-10 w-10" weight="fill" /> <span><b>Timo</b>Labs</span>
        </Link>
    );
};

export default Logo;
