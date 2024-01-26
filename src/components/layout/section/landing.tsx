"use client";
import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    CaretDown,
    DiscordLogo,
    GithubLogo,
    InstagramLogo,
    YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { IconLink } from "@/components/ui/link";
import Image from "next/image";

export const LandingSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full portrait:min-h-svh px-4 overflow-hidden m-auto grid place-items-center"
        >
            <div className=" max-w-screen-md w-full bg-surface-adaptive  border-adaptive border  text-black rounded-2xl overflow-hidden mt-16">
                <div className="w-full h-full flex portrait:flex-col-reverse flex-wrap items-center justify-center portrait:h-full overflow-hidden">
                    <div className="flex flex-col justify-center items-start gap-4 flex-1 p-6  text-back dark:text-back-dark portrait:text-back rounded-r-2xl portrait:rounded-none portrait:w-full bg-[#b5b8e5]">
                        <div className="flex flex-col gap-2 items-center">
                            <h1 className="uppercase text-5xl portrait:text-3xl font-black tracking-widest text-start w-full">
                                Vincent
                                <br />
                                Timothy
                            </h1>
                            <h1 className="uppercase text-xl font-mono tracking-widest text-start w-full">
                                Web Developer based on Karawang, Indonesia.
                            </h1>
                        </div>
                        <Link href="/linktree" className="text-xl text-start tracking-wider bg-black text-white font-medium px-4 py-2 rounded-full flex flex-row gap-2 items-center">
                            Contact Me <ArrowRight weight="bold"/>
                        </Link>
                    </div>
                    <div className="portrait:flex-none flex-1 w-auto flex m-4">
                        <Image
                            src="/assets/naya.png"
                            alt="Nadiem Anwar Makarim"
                            width={500}
                            height={500}
                            className=" aspect-square object-contain rounded-2xl h-full w-auto bg-[#fdd1b9]"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col max-w-screen-lg w-full h-full bg-red-500 m-auto">
                <div className="flex-1 bg-green-500"></div>
                <div className="flex-1 bg-blue-300"></div>
                {/* <div className="flex flex-1 bg-[#fbba8c] shadow-2xl shadow-[#fbba8c]">
                    
                    <div className="absolute right-0 bottom-0 text-black font-semibold font-mono p-4">
                        <p>"Naya Emiko"</p>
                        <p>from CODENAME: Melt</p>
                    </div> 
                </div> 
                <div className="w-full h-[1/2] flex-1">
                    
                </div>
                <Image
                        src="/assets/naya.png"
                        className="h-full w-full flex-1 object-cover"
                        width={1951}
                        height={3592}
                        alt="Naya"
                    />
                <div className="flex-1 w-auto h-auto flex flex-col gap-2 justify-center items-start pb-16 px-4">
                    <h3 className="text-4xl text-white font-medium px-2">
                        Nice to meet you!
                    </h3>
                    <h3 className="text-4xl text-white font-medium px-2">
                        I'm{" "}
                        <span className="underline font-bold decoration-[#f55e8e]">
                            Vincent Timothy Kurniawan
                        </span>
                    </h3>
                    <h3 className="text-xl text-white font-light px-2">
                        Web Developer based in Jakarta, Indonesia.
                    </h3>
                    <div className="flex flex-row gap-4 py-2">
                        <IconLink href="https://www.instagram.com/thio.timoo/">
                            <InstagramLogo
                                className="fill-adaptive"
                                alt="Instagram"
                                weight="fill"
                                size={32}
                            />
                        </IconLink>
                        <IconLink href="https://www.youtube.com/channel/UCTUCWFK_Pcr1Eg3XaRHRDgA">
                            <YoutubeLogo
                                className="fill-adaptive"
                                alt="Youtube"
                                weight="fill"
                                size={32}
                            />
                        </IconLink>
                        <IconLink href="https://github.com/thiotimoo">
                            <GithubLogo
                                className="fill-adaptive"
                                alt="Github"
                                weight="fill"
                                size={32}
                            />
                        </IconLink>
                        <IconLink href="https://discord.gg/9hzGZCdg9y">
                            <DiscordLogo
                                className="fill-adaptive"
                                alt="Discord"
                                weight="fill"
                                size={32}
                            />
                        </IconLink>
                    </div>
                    <Link
                        className="bg-surface dark:bg-surface-dark text-adaptive rounded-lg px-4 py-2 text-lg font-semibold hover:ring-2 hover:ring-fore hover:dark:ring-fore-dark   border-2 border-fore dark:border-fore-dark border-opacity-30 dark:border-opacity-10 transition-all"
                        href="https://discord.gg/9hzGZCdg9y"
                    >
                        Contact Me
                    </Link>
                </div>
                
            </div> */}
        </motion.section>
    );
};
