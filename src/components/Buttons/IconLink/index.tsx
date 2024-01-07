import { IBaseLinkProps } from '@/types/base'
import Link from 'next/link'
import React from 'react'

const IconLink: React.FC<IBaseLinkProps> = ({children, className, href}) => {
  return (
    <Link href={href} className={`p-2 bg-surface dark:bg-surface-dark rounded-md hover:ring-fore hover:dark:ring-fore-dark hover:ring-2 transition-all border-2 border-fore dark:border-fore-dark border-opacity-30 dark:border-opacity-10 ${className}`}>{children}</Link>
  )
}

export default IconLink