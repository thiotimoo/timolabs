import path from "path";
import matter from "gray-matter";
import { BlogFrontMatter, BlogType, BlogMetadata } from "@/types/blogs";
import { fetchBlogList } from "./admin";
import { useEffect } from "react";
const root = path.join(process.cwd(), "contents");

// export const getSortedPostData = (blogType: BlogType, limit: number = 100) => {
//     const dirPath = path.join(root, blogType);
//     const files = fs.readdirSync(dirPath);
//     const allPostsData = files.map((fileName) => {
//         // Remove ".md" from file name to get id
//         const slug = fileName.replace(/\.md$/, "");

//         const fullPath = path.join(dirPath, fileName);
//         const source = fs.readFileSync(fullPath, "utf-8");

//         const { data } = matter(source);
//         const metadata: BlogMetadata = {
//             blogType: blogType,
//             frontMatter: data,
//             slug: slug,
//         };
//         return metadata;
//     });

//     return allPostsData
//         .sort((a: any, b: any) => {
//             if (a.frontMatter.pinned && !b.frontMatter.pinned) {
//                 return -1; // Pinned posts come first
//             } else if (!a.frontMatter.pinned && b.frontMatter.pinned) {
//                 return 1; // Pinned posts come first
//             } else if (a.frontMatter.date < b.frontMatter.date) {
//                 return 1;
//             } else {
//                 return -1;
//             }
//         })
//         .slice(0, limit);
// };

export const getSortedPostData = async (
    blogType: BlogType,
    limit: number = 100
) => {
    const blogList = await fetchBlogList(blogType);

    return blogList
        .sort((a: any, b: any) => {
            if (a.pinned && !b.pinned) {
                return -1; // Pinned posts come first
            } else if (!a.pinned && b.pinned) {
                return 1; // Pinned posts come first
            } else if (a.createdAt < b.createdAt) {
                return 1;
            } else {
                return -1;
            }
        })
        .slice(0, limit);
};

// export const getBlogBySlug = async (blogType: string, slug: string) => {
//     const fullPath = path.join(root, blogType, `${slug}.md`);
//     const source = await fs.readFileSync(fullPath, "utf8");
//     // @ts-ignore
//     const { data, content }: { data: BlogFrontMatter; content: string } =
//         matter(source);
//     return {
//         slug: slug,
//         frontMatter: data,
//         markdownBody: content,
//     };
// };

export const fetchBlogBySlug = async (blogType: string, slug: string) => {
    const response = await fetch(
        (process.env.BASE_URL ?? "") + (`/api/v1/blog?slug=${slug}&type=${blogType}`)
    );
    const payload = await response.json();
    if (payload.statusCode == 200) {
        return payload.data;
    }

    return {};
};

export const fetchBlogById = async (blogType: string, id: string) => {
    const response = await fetch(
        (process.env.BASE_URL ?? "") + (`/api/v1/blog?id=${id}`)
    );
    const payload = await response.json();
    if (payload.statusCode == 200) {
        return payload.data;
    }

    return {};
};