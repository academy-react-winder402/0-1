import React from 'react'

import { BlogWrapper } from '../BlogWrapper/BlogWrapper'
import { BlogNvbar } from './BlogNvbar/BlogNvbar/BlogNvbar'

const BlogList = () => {
  return (
    <div className='w-[95%] h-auto flex flex-wrap justify-center bg-slate-50 rounded-xl dark:bg-black'>
        <BlogNvbar />
        <BlogWrapper />
    </div> 
  )
}

export  {BlogList}