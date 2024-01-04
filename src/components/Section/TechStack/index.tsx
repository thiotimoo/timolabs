import React from "react";
import Section from "../BaseSection";
import Image from "next/image";
interface TechStackProps {
    name: string;
    src: string;
    invert?: boolean;
}

const ItemTechStack: React.FC<TechStackProps> = ({
    name,
    src,
    invert = false,
}) => {
    return (
        <div className="font-space font-bold text-center self-center justify-center w-1/2 md:w-1/4 sm:w-1/3 grid place-items-center p-4 gap-2">
            <Image
            unoptimized //remove to optimize
                className={`w-24 h-24 fill-white  ${invert && "dark:invert"}`}
                src={src}
                alt={name}
                width={100}
                height={100}
            />
            {name}
        </div>
    );
};
const TechStackSection = () => {
    return (
        <Section>
            <header>
                <h2 className="font-semibold text-2xl">My Tech Stack</h2>
            </header>
            <div className="flex flex-wrap justify-center">
                <ItemTechStack src="/tech-stacks/html-icon.svg" name="HTML" />
                <ItemTechStack src="/tech-stacks/css-icon.svg" name="CSS" />
                <ItemTechStack
                    src="/tech-stacks/js-icon.svg"
                    name="Javascript"
                />
                <ItemTechStack
                    src="/tech-stacks/ts-icon.svg"
                    name="Typescript"
                />
                <ItemTechStack
                    src="/tech-stacks/nextjs-icon.svg"
                    name="NextJS"
                    invert
                />
                <ItemTechStack
                    src="/tech-stacks/reactjs-icon.svg"
                    name="ReactJS"
                />
                <ItemTechStack
                    src="/tech-stacks/tailwindcss-icon.svg"
                    name="TailwindCSS"
                />
                <ItemTechStack
                    src="/tech-stacks/nodejs-icon.svg"
                    name="NodeJS"
                />
                <ItemTechStack
                    src="/tech-stacks/java-icon.svg"
                    name="Java"
                />
                <ItemTechStack
                    src="/tech-stacks/gamemaker-icon.svg"
                    name="GameMaker Language"
                    invert
                />
            </div>
        </Section>
    );
};

export default TechStackSection;
