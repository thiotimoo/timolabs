import BaseSection from "@/components/section/BaseSection";
import HeaderSection from "@/components/section/HeaderSection";
import SearchBar from "@/components/design/SearchBar";
import React from "react";
import AddBlogButton from "@/components/button/admin/AddBlogButton";
import FilterBlogButton from "@/components/button/admin/FilterBlogButton";

const BlogsAdminPage = () => {
    return (
        <BaseSection className="justify-items-start max-w-screen-md">
            <HeaderSection>Manage Blogs</HeaderSection>
            <SearchBar className="w-full" />
            <div className="flex flex-wrap justify-between w-full gap-2">
                <AddBlogButton />
                <FilterBlogButton />
            </div>
        </BaseSection>
    );
};

export default BlogsAdminPage;
