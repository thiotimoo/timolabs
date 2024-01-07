import React from 'react'
import NavItem from './NavItem'
import { IBaseProps } from '@/types/base'

const Navigation:React.FC<IBaseProps> = ({className}) => {
  return (
    <ul className={`flex-row md:w-auto w-full h-full gap-2 flex px-4 md:px-2 py-2 ${className}`}>
        <NavItem text='Home' href='/' />
        <NavItem text='Blog' href='/posts' />
        <NavItem text='Works' href='/projects' />
    </ul>
  )
}

export default Navigation