import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const SearchBar = () => {
    return (
        <div className="relative block">
            <MagnifyingGlass
                className="absolute m-auto start-0 flex ms-3 w-5 h-5"
                size={32}
            />
            <input className="bg-surface-adaptive text-adaptive rounded-md p-2 ps-10 text-lg" />
        </div>
    );
};

export default SearchBar;
