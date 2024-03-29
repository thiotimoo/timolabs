import { HeaderSection, Section } from '@/components/layout';
import { AddBlogButton, FilterBlogButton } from '@/components/ui/admin';
import { BlogTable } from '@/components/ui/admin/table';
import { SearchBar } from '@/components/ui/input';
import React from 'react'

const WorksAdminPage = () => {
    return (
        <Section className="justify-items-start max-w-screen-md">
            <HeaderSection>Manage Works</HeaderSection>
            <SearchBar className="w-full" />
            <div className="flex flex-wrap justify-between w-full gap-2">
                <AddBlogButton blogType='works'  />
                <FilterBlogButton />
            </div>
            <BlogTable blogType='works'/>
        </Section>
    );
}

export default WorksAdminPage