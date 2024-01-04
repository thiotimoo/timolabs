import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogFrontMatter, BlogType, BlogMetadata } from "@/types/blogs";
const root = path.join(process.cwd(), "contents");

export const getSortedPostData = (blogType: BlogType, limit: number = 100) => {
    const dirPath = path.join(root, blogType);
    const files = fs.readdirSync(dirPath);
    const allPostsData = files.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "");

        const fullPath = path.join(dirPath, fileName);
        const source = fs.readFileSync(fullPath, "utf-8");

        const { data } = matter(source);
        const metadata: BlogMetadata = {
            blogType: blogType,
            frontMatter: data,
            slug: slug,
        };
        return metadata;
    });

    return allPostsData
        .sort((a: any, b: any) => {
            if (a.frontMatter.pinned && !b.frontMatter.pinned) {
                return -1; // Pinned posts come first
            } else if (!a.frontMatter.pinned && b.frontMatter.pinned) {
                return 1; // Pinned posts come first
            } else if (a.frontMatter.date < b.frontMatter.date) {
                return 1;
            } else {
                return -1;
            }
        })
        .slice(0, limit);
};

export const getBlogBySlug = async (blogType: string, slug: string) => {
    const fullPath = path.join(root, blogType, `${slug}.md`);
    const source = await fs.readFileSync(fullPath, "utf8");
    // @ts-ignore
    const { data, content }: { data: BlogFrontMatter; content: string } =
        matter(source);
    return {
        slug: slug,
        frontMatter: data,
        markdownBody: content,
    };
};
