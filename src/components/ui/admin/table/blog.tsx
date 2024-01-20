"use client";
import React, { useEffect, useState } from "react";
import { fetchBlogList } from "@/lib/admin";
import { EmptyTableBody } from "../../table";
const cellClassName = "px-6 py-2 text-start";
const rowClassName = "border-b border-adaptive";

export interface IBlogRowProps {
    item: any;
    className: string;
}

export const BlogRow: React.FC<IBlogRowProps> = ({ item, className }) => {
    return (
        <tr className={className}>
            <td className={cellClassName}>{item.title}</td>
            <td className={cellClassName}>{item.createdAt.toString()}</td>
            <td className={cellClassName}>{item.category}</td>
        </tr>
    );
};

export const BlogTable = () => {
    const [blogList, setBlogList] = useState([]);

        // const clearData = () => {
        //     setBlogList([]);
        // };

    const fetchData = async () => {
        setBlogList(await fetchBlogList());
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
                    </tr>
                </thead>
                <tbody>
                    {blogList.map((item: any, index: Number) => {
                        if (index == blogList.length - 1) {
                            return <BlogRow key={item.key} item={item} className="" />;
                        }
                        return <BlogRow key={item.key} item={item} className={rowClassName} />;
                    })}
                </tbody>
                
                
            </table>
            {!blogList.length && <EmptyTableBody/>}
        </div>
    );
};
