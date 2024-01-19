import SearchBar from '@/components/design/SearchBar';
import BaseSection from '@/components/section/BaseSection';
import HeaderSection from '@/components/section/HeaderSection';
import React from 'react'

const WorksAdminPage = () => {
    return (
        <BaseSection>
            <HeaderSection>
                Manage Works
            </HeaderSection>
            <SearchBar className='max-w-screen-md'/>
        </BaseSection>
    );
}

export default WorksAdminPage