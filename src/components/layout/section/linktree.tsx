import React from "react";
import Image from "next/image";
import { Section } from "@/components/layout/section";
import Link from "next/link";
import { DiscordLogo, GithubLogo, InstagramLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
interface LinkTreeProps {
    name: string;
    href: string;
    icon: React.ReactNode;
    invert?: boolean;
}

const ItemLinkTree: React.FC<LinkTreeProps> = ({
    name,
    href,
    icon,
    invert = false,
}) => {
    return (
        <Link href={href} className="flex flex-row gap-4 font-mono p-4 hover:underline">
            {icon}
            {name}
        </Link>
    );
};
export const LinkTreeSection = () => {
    return (
        <Section>
            <header>
                <h2 className="font-semibold text-2xl"><span className="bg-[#f55e8f] text-black px-1">@thio.timoo</span> Linktree</h2>
            </header>
            <div className="flex flex-col justify-center divide-y divide-adaptive bg-surface-adaptive rounded-md">
                <ItemLinkTree
                    icon={<GithubLogo weight="bold" width={24} height={24} />}
                    href="https://github.com/thiotimoo"
                    name="Github"
                />
                <ItemLinkTree
                    icon={<InstagramLogo weight="bold" width={24} height={24} />}
                    href="https://www.instagram.com/thio.timoo/"
                    name="Instagram"
                />
                <ItemLinkTree
                    icon={<YoutubeLogo weight="bold" width={24} height={24} />}
                    href="https://www.youtube.com/channel/UCTUCWFK_Pcr1Eg3XaRHRDgA"
                    name="YouTube"
                />
                <ItemLinkTree
                    icon={<DiscordLogo weight="bold" width={24} height={24} />}
                    href="https://discord.gg/9hzGZCdg9y"
                    name="Discord Server"
                />
            </div>
        </Section>
    );
};
