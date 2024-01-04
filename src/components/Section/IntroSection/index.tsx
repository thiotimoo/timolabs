import React from "react";
import Image from "next/image";
import Section from "../BaseSection";

const Introduction = () => {
    return (
        <Section className="place-items-center">
            <div className="bg-gradient-intro rounded-3xl w-full h-52 flex flex-col gap-2 justify-center items-center p-6">
                {/* <Image
                    className="w-full h-96 object-cover"
                    src="/home_banner.png"
                    width={517}
                    height={290}
                    alt="Frieren"
                    draggable="false"
                /> */}

                <h3 className="text-5xl text-white font-bold flex items-center gap-2 bg-black text-center p-2">
                    @thio.timoo
                </h3>
                <p className="text-lg text-white bg-black px-2 text-center">Fullstack Web Developer based in Karawang, Indonesia.</p>
            </div>
        </Section>
    );
};

export default Introduction;
