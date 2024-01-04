import { UrlObject } from "url";
import { BlogFrontMatter } from "./blogs";

export interface IContainerProps {
    className?: string;
    children: React.ReactNode;
}

export interface IHeaderSection {
    text: string;
    href?: string | UrlObject;
}

export interface IProjectList {
    display: boolean;
}

export interface IPostList {
    display: boolean;
}