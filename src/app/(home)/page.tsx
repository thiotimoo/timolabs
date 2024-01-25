import { AboutSection, LandingSection, TechStackSection } from "@/components/layout";
import { PostList, ProjectList } from "@/components/ui/list";

export default function Home() {
    return (
        <main className="flex flex-col w-full items-center">
            <LandingSection />
            <div className="flex max-w-screen-md flex-col w-full divide-y divide-adaptive ">
                <AboutSection />
                <TechStackSection />
                <ProjectList display={true} />
                <PostList display={true} />
            </div>
        </main>
    );
}
