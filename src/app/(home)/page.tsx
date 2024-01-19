import AboutSection from "@/components/section/AboutSection";
import Introduction from "@/components/section/IntroSection";
import PostList from "@/components/list/PostList";
import ProjectList from "@/components/list/ProjectList";
import TechStackSection from "@/components/section/TechStackSection";

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
