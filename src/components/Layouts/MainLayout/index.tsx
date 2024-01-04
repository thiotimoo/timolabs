import { IContainerProps } from '@/types/base'
import React from 'react'

const MainLayout: React.FC<IContainerProps> = ({children, className}) => {
  return (
    <main className={`flex max-w-screen-md flex-col w-full ${className}`}>{children}</main>
  )
}

export default MainLayout