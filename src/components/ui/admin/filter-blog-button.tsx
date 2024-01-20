"use client"
import React from 'react'
import { FunnelSimple } from '@phosphor-icons/react/dist/ssr';
import { StyledButton } from '../button';

export const FilterBlogButton = () => {
    const onClickAdd = () => {
        console.log("Filter clicked!");
    };
    return (
        <StyledButton type='button' style='secondary' className="flex flex-row items-center justify-center gap-1" onClick={onClickAdd}>
            <FunnelSimple weight="bold" className="w-6 h-6" size={32} />
            Filters
        </StyledButton>
    );
}