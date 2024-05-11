import React from 'react'
import { BlogHerosection } from '../../Components/Blog/BlogHerosection/BlogHerosection'
import { BlogList } from '../../Components/Blog/BlogList/BlogList/BlogList'

const Blog = () => {
  return (
    <div className='w-full h-auto flex flex-wrap justify-center '>
        <BlogHerosection />
        <BlogList />
    </div>
  )
}

export  {Blog}