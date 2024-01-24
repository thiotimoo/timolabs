
import { HeaderSection, Section } from "@/components/layout";
import { AddBlogButton, FilterBlogButton } from "@/components/ui/admin";
import { BlogTable } from "@/components/ui/admin/table";
import { SearchBar } from "@/components/ui/input";
import { authUserSession } from "@/lib/auth-libs";
import React from "react";

const BlogsAdminPage = async () => {
    const user = await authUserSession();
    return (
        <Section className="justify-items-start max-w-screen-md">
            <HeaderSection>Manage Blogs</HeaderSection>
            <HeaderSection>{user?.name}</HeaderSection>
            <SearchBar className="w-full" />
            <div className="flex flex-wrap justify-between w-full gap-2">
                <AddBlogButton blogType="blogs" />
                <FilterBlogButton />
            </div>
            <BlogTable blogType="blogs"/>
        </Section>
    );
};

export default BlogsAdminPage;
