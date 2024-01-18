import { IBaseProps } from "@/types/base";
import React from "react";
import Navigation from "./Navigation";
import Logo from "../Navbar/Logo";

const Sidebar: React.FC<IBaseProps> = ({className}) => {
    return (
        <aside className={`flex flex-col ${className} items-center bg-surface dark:bg-surface-dark`}>
          <Logo className="p-6"/>
          <Navigation/>
            
        </aside>
    );
};

export default Sidebar;
