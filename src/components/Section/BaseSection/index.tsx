"use client";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    cols?: number;
}

const Section: React.FC<SectionProps> = ({ children, className, cols = 1 }) => {
    return (
        <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`p-6 gap-4 grid grid-cols-1 lg:grid-cols-${cols} ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
