import Article from "@/components/Article";
import Section from "@/components/Section/BaseSection";
import AboutSection from "@/components/Section/AboutSection";
import Introduction from "@/components/Section/IntroSection";
import PostList from "@/components/Lists/ListPost";
import ProjectList from "@/components/Lists/ListProject";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex max-w-screen-md flex-col w-full divide-y divide-adaptive ">
            <Introduction/>
            <AboutSection/>
            <ProjectList display={true}/>
            <PostList display={true}/>
        </main>
    );
}
