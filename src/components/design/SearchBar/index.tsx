import { IBaseProps } from "@/types/base";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const SearchBar:React.FC<IBaseProps> = ({className}) => {
    return (
        <div className={`relative block ${className}`}>
            <MagnifyingGlass
                className="absolute m-auto bottom-0 top-0 start-0 flex ms-3 w-5"
                size={32}
                weight="bold"
            />
            <input className="bg-surface-adaptive text-adaptive rounded-md p-2 ps-10 text-lg w-full" placeholder="Search here..."/>
        </div>
    );
};

export default SearchBar;
