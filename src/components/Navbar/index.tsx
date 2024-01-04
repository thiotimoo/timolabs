import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";


interface Props {
    className?: string;
}

const Navbar: React.FC<Props> = ({ className }) => {
    return (
        <header
            className={`w-full flex justify-center items-center bg-back dark:bg-surface-dark bg-opacity-20 dark:bg-opacity-20  backdrop-blur-sm ${className}`}
        >
            <div
                className={`w-full max-w-screen-lg p-2 md:p-4 flex flex-col md:flex-row gap-4 justify-between items-center border-b-2 border-opacity-10 dark:border-opacity-10 border-fore dark:border-fore-dark`}
            >
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};

export default Navbar;
