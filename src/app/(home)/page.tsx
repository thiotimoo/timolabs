import Article from "@/components/Article";
import Section from "@/components/Section/BaseSection";
import AboutSection from "@/components/Section/AboutSection";
import Introduction from "@/components/Section/IntroSection";
import PostList from "@/components/Lists/PostList";
import ProjectList from "@/components/Lists/ProjectList";
import Image from "next/image";
import TechStackSection from "@/components/Section/TechStack";

export default function Home() {
    return (
        <main className="flex flex-col w-full items-center">
            <Introduction />
            <div className="flex max-w-screen-md flex-col w-full divide-y divide-adaptive ">
                <AboutSection />
                <TechStackSection />
                <ProjectList display={true} />
                <PostList display={true} />
            </div>
        </main>
    );
}
