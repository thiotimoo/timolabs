import { UrlObject } from "url";
import { BlogFrontMatter } from "./blogs";

export interface IContainerProps {
    className?: string;
    children: React.ReactNode;
}

export interface IButtonProps { 
    className?: string;
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


export interface ISectionProps {
    children: React.ReactNode;
    className?: string;
    cols?: number;
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