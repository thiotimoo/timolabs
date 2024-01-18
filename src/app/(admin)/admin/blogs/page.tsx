import SearchBar from '@/components/SearchBar';
import Section from '@/components/Section/BaseSection';
import HeaderSection from '@/components/Section/HeaderSection';
import React from 'react'

const BlogsAdminPage = () => {
    return (
        <Section>
            <HeaderSection>
                Manage Blogs
            </HeaderSection>
            <SearchBar/>
        </Section>
    );
}

export default BlogsAdminPage