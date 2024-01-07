"use client";
import React from "react";
import Image from "next/image";
import Section from "../BaseSection";
import Link from "next/link";
import {
    CaretDown,
    DiscordLogo,
    GithubLogo,
    InstagramLogo,
    YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import IconLink from "@/components/Buttons/IconLink";

const Introduction = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-intro w-full min-h-[576px] h-screen flex items-center justify-center relative"
        >
            <div className="mt-16 max-w-screen-xl min-h-[576px] w-full h-full flex flex-col gap-2 justify-center items-start p-6 pb-16">
                <p className="text-lg text-white font-normal flex items-center text-center px-2">
                    Hello! I am
                </p>
                <h3 className="text-2xl text-white font-semibold flex items-center text-center px-2">
                    Vincent Timothy Kurniawan
                </h3>
                <h3 className="xl:text-8xl md:text-7xl text-6xl text-white font-semibold flex items-center gap-2 text-center px-2">
                    Full-stack
                </h3>
                <h3 className="xl:text-8xl md:text-7xl text-6xl text-white font-semibold flex items-center gap-2 text-center px-2">
                    Webdev.
                </h3>
                <p className="text-lg text-white px-2 text-center font-normal">
                    and, i am from Karawang, Indonesia.
                </p>
                <div className="flex flex-row gap-4 py-2">
                    <IconLink href="https://www.instagram.com/thio.timoo/">
                        <InstagramLogo className="fill-adaptive" alt="Instagram" weight="fill" size={32} />
                    </IconLink>
                    <IconLink href="https://www.youtube.com/channel/UCTUCWFK_Pcr1Eg3XaRHRDgA">
                        <YoutubeLogo className="fill-adaptive"  alt="Youtube" weight="fill" size={32} />
                    </IconLink>
                    <IconLink href="https://github.com/thiotimoo">
                        <GithubLogo className="fill-adaptive"  alt="Github" weight="fill" size={32} />
                    </IconLink>
                    <IconLink href="https://discord.gg/9hzGZCdg9y">
                        <DiscordLogo className="fill-adaptive"  alt="Discord" weight="fill" size={32} />
                    </IconLink>
                </div>
                <Link
                    className="bg-surface dark:bg-surface-dark text-adaptive rounded-lg px-4 py-2 text-lg font-semibold hover:ring-2 hover:ring-fore hover:dark:ring-fore-dark   border-2 border-fore dark:border-fore-dark border-opacity-30 dark:border-opacity-10 transition-all"
                    href="/github"
                >
                    Contact Me
                </Link>
            </div>
            <CaretDown className="absolute bottom-6" weight="bold" size={24} />
        </motion.section>
    );
};

export default Introduction;
