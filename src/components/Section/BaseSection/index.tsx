import React from "react";

interface SectionProps {
    children: React.ReactNode,
    className?: string,
    cols?: number,
}

const Section: React.FC<SectionProps> = ({children, className, cols = 1}) => {
    return (
        <section className={`p-6 gap-4 grid grid-cols-1 lg:grid-cols-${cols} ${className}`}>
            {children}
        </section>
    );
};

export default Section;
