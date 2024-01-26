import { IBaseProps } from "@/types/base";
import { Bird, BracketsCurly, ScribbleLoop } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export const Logo: React.FC<IBaseProps> = ({className}) => {
    return (
        <Link className={`flex flex-row items-center text-xl gap-2 text-adaptive ${className}`} href="/">
            <Bird className="h-7 w-7" weight="regular" /> <span><b>Timo</b>Labs</span>
        </Link>
    );
};

