"use client"
import React from "react";
import Image from "next/image";
import Section from "../BaseSection";
import Link from "next/link";
import { DiscordLogo, GithubLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import {motion} from 'framer-motion'

const Introduction = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }} className="bg-gradient-intro w-full h-screen grid place-items-center min-h-96">
            <div className="mt-16 max-w-screen-xl min-h-96 w-full h-full flex flex-col gap-2 justify-center items-start p-6 pb-16">
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
                    <InstagramLogo weight="fill" size={32}/>
                    <GithubLogo weight="fill" size={32}/>
                    <YoutubeLogo weight="fill" size={32}/>
                    <DiscordLogo weight="fill" size={32}/>
                </div>
                <Link
                    className="bg-fore dark:bg-fore-dark text-adaptive-invert rounded-lg px-4 py-2 text-lg font-semibold"
                    href="/github"
                >
                    Contact Me
                </Link>

                <hr className="absolute bottom-0 self-center w-48 h-1 bg-back dark:bg-back-dark border-0 rounded my-4"></hr>
            </div>
        </motion.section>
    );
};

export default Introduction;
