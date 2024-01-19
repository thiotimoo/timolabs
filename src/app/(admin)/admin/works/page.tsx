import { HeaderSection, Section } from '@/components/layout';
import { SearchBar } from '@/components/ui/input';
import React from 'react'

const WorksAdminPage = () => {
    return (
        <Section>
            <HeaderSection>
                Manage Works
            </HeaderSection>
            <SearchBar className='max-w-screen-md'/>
        </Section>
    );
}

export default WorksAdminPage