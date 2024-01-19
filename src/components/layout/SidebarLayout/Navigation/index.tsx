import React from 'react'
import NavItem from './NavItem'
import { IBaseProps } from '@/types/base'

const Navigation:React.FC<IBaseProps> = ({className}) => {
  return (
    <ul className={`flex-col w-full gap-2 flex px-4 md:px-2 py-2 ${className}`}>
        <NavItem text='Dashboard' href='/admin' />
        <NavItem text='Blogs' href='/admin/blogs' />
        <NavItem text='Works' href='/admin/works' />
    </ul>
  )
}

export default Navigation