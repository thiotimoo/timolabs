import { UrlObject } from "url";
import { BlogFrontMatter } from "./blogs";

export interface IContainerProps {
    className?: string;
    children: React.ReactNode;
}

export interface IBaseProps {
    className?: string;
}

export interface IBaseLinkProps {
    className?: string;
    children: React.ReactNode;
    href: string | UrlObject;
}

export interface IHeaderSection {
    children: React.ReactNode;
    href?: string | UrlObject;
}

export interface IProjectList {
    display: boolean;
}

export interface IPostList {
    display: boolean;
}