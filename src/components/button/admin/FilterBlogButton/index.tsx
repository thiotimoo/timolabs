"use client"
import React from 'react'
import SecondaryButton from '../../template/SecondaryButton';
import { FunnelSimple } from '@phosphor-icons/react/dist/ssr';

const FilterBlogButton = () => {
    const onClickAdd = () => {
        console.log("Filter clicked!");
    };
    return (
        <SecondaryButton className="flex flex-row items-center justify-center gap-1" onClick={onClickAdd}>
            <FunnelSimple weight="bold" className="w-6 h-6" size={32} />
            Filters
        </SecondaryButton>
    );
}

export default FilterBlogButton