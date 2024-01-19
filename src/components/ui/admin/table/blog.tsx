import Blog from "@/model/Blog";
import React from "react";
import { EmptyTableBody } from "../../table";
const cellClassName = "px-6 py-2 text-start";
const rowClassName = "border-b border-adaptive";

const fetchBlogList = async () => {
    try {
        const data = await Blog.find({});
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export interface IBlogRowProps {
    item: any; //TODO: CHANGE THE TYPE
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

export const BlogTable = async () => {
    const blogList = await fetchBlogList();
    return (
        <div className="rounded-lg w-full overflow-x-auto">
            <table className="table-auto w-full border-collapse bg-surface-adaptive">
                <thead className="text-xs text-adaptive uppercase text-start">
                    <tr>
                        <th className={cellClassName}>Title</th>
                        <th className={cellClassName}>Date</th>
                        <th className={cellClassName}>Category</th>
                    </tr>
                </thead>
                {blogList.length ? (
                    <tbody>
                        {blogList.map((item, index) => {
                            if (index == blogList.length - 1) {
                                return <BlogRow item={item} className="" />;
                            }
                            return (
                                <BlogRow item={item} className={rowClassName} />
                            );
                        })}
                    </tbody>
                ) : (
                    <EmptyTableBody />
                )}
            </table>
        </div>
    );
};
