import { IHeaderSection } from "@/types/base";
import Link from "next/link";
import React from "react";

const HeaderSection: React.FC<IHeaderSection> = ({children, href}) => {
    return (
        <header className="flex flex-row items-center justify-between">
            <h2 className="font-semibold text-2xl">{children}</h2>
            {href && <Link className="text-link" href={href}>Show All</Link>}
        </header>
    );
};

export default HeaderSection;
