import Image from "next/image";
import React from "react";
import Section from "../Section/BaseSection";
import Category from "./Category";
interface ArticleProps {
    title: {};
}
const Article = () => {
    return (
        <article className="gap-4 flex flex-col py-14">
            <Section cols={2}>
                <div className="flex flex-col gap-2">
                <Category/>
                <h2 className="text-start font-bold text-5xl">
                    Stevie My Beloved
                </h2>
                </div>
                
                <div className="bg-white rounded-2xl overflow-clip border-fore dark:border-fore-dark border-4">
                    <Image
                    unoptimized //remove to optimize
                    className="w-full"
                        src="/home_banner.png"
                        width={517}
                        height={290}
                        alt="Frieren"
                        draggable="false"
                    />
                </div>
            </Section>
        </article>
    );
};

export default Article;
