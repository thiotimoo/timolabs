import {
    AboutSection,
    HeaderSection,
    LandingSection,
    Section,
    TechStackSection,
} from "@/components/layout";
import { PostList, ProjectList } from "@/components/ui/list";
import { fetchSortedBlogs } from "@/lib/blog-libs";
const getBlogsList = async () => {
    const data = await fetchSortedBlogs("blogs", 4);
    return data;
};

const getWorksList = async () => {
    const data = await fetchSortedBlogs("works", 4);
    return data;
};

export default async function Home() {
    const works = await getWorksList();
    const blogs = await getBlogsList();
    return (
        <main className="flex flex-col w-full items-center">
            <LandingSection />
            <div className="flex max-w-screen-md flex-col w-full divide-y divide-adaptive ">
                <AboutSection />

                <Section>
                    <HeaderSection href={"/works"}>My Works</HeaderSection>
                    <ProjectList data={works} />
                </Section>
                <Section>
                    <HeaderSection href={"/blogs"}>Recent Blogs</HeaderSection>
                    <PostList data={blogs} />
                </Section>
                <TechStackSection />
            </div>
        </main>
    );
}
