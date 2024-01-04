import React from 'react'
import NavItem from './NavItem'
const Navigation = () => {
  return (
    <ul className='flex-row md:w-auto w-full h-full gap-2 flex overflow-x-auto px-4 md:px-2 py-2'>
        <NavItem text='About' href='/about' />
        <NavItem text='Posts' href='/posts' />
        <NavItem text='Projects' href='/projects' />
        <NavItem text='Dashboard' href='/dashboard' />
    </ul>
  )
}

export default Navigation