import { IBlog } from "@/model/Blog";
import { UrlObject } from "url";

export type BlogType = "blogs" | "works";
export type ProjectType = "web" | "game";
export type BlogVisibility = "draft" | "published";

export interface BlogMetadata {
    blogType: BlogType;
    frontMatter: any;
    slug: string;
}

export interface IItemProject {
    name: string;
    description: string;
    href: string | UrlObject;
}

export type BlogFrontMatter = {
    title: string;
    description: string;
    thumbnail_url: string;
    date: string;
    tags: string[];
    project_type?: ProjectType;
    pinned?: boolean;
};

export type BlogPostProps = {
    slug: string;
    frontMatter: BlogFrontMatter;
    markdownBody: any;
};

export interface IBlogLayoutProps {
    children: React.ReactNode;
    blogData: IBlog;
}

export type IMarkdownProps = {
    markdownBody: any;
};

export type IBlogBuilder = {
    blogType: BlogType;
    slug: string;
};
