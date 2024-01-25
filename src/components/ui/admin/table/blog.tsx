"use client";
import React, { useEffect, useState } from "react";
import { EmptyTableBody } from "../../table";
import { useRouter } from "next/navigation";
import { BlogType } from "@/types/blogs";
import { IBlog } from "@/model/Blog";
import { fetchBlogAdminList } from "@/lib/admin";
const cellClassName = "px-6 py-2 text-start";
const rowClassName = "border-b border-adaptive";

export interface IBlogRowProps {
    item: any;
    className: string;
}

export interface IBlogTableProps {
    blogType: BlogType;
}

export const BlogRow: React.FC<IBlogRowProps> = ({ item, className }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/admin/editor/"+item.blogType+"/" + item._id.toString());
    };
    return (
        <tr
            className={`${className} cursor-pointer hover:text-green-400 transition-all`}
            onClick={handleClick}
        >
            <td className={cellClassName}>
                {item.title.trim() != "" ? item.title : "(untitled)"}
            </td>
            <td className={cellClassName}>{item.createdAt.toString()}</td>
            <td className={cellClassName}>{item.category}</td>
            <td className={cellClassName}>{item.visibility}</td>
        </tr>
    );
};

export const BlogTable: React.FC<IBlogTableProps> = ({blogType}) => {
    const [blogList, setBlogList] = useState([]);

    // const clearData = () => {
    //     setBlogList([]);
    // };

    const fetchData = async () => {
        setBlogList(await fetchBlogAdminList(blogType));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="rounded-lg w-full overflow-x-auto bg-surface-adaptive pb-2">
            <table className="table-auto w-full border-collapse">
                <thead className="text-xs text-adaptive uppercase text-start">
                    <tr>
                        <th className={cellClassName}>Title</th>
                        <th className={cellClassName}>Date</th>
                        <th className={cellClassName}>Category</th>
                        <th className={cellClassName}>Visibility</th>
                    </tr>
                </thead>
                <tbody>
                    {blogList.map((item: any, index: Number) => {
                        if (index == blogList.length - 1) {
                            return (
                                <BlogRow
                                    key={item.key}
                                    item={item}
                                    className=""
                                />
                            );
                        }
                        return (
                            <BlogRow
                                key={item.key}
                                item={item}
                                className={rowClassName}
                            />
                        );
                    })}
                </tbody>
            </table>
            {!blogList.length && <EmptyTableBody />}
        </div>
    );
};
