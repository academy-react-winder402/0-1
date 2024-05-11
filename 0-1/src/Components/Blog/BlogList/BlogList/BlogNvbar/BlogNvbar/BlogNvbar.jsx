import React from 'react'
import { Search } from '../../../../../Common/Search/Search'
import { BlogNvbarItem } from '../BlogNvbarItems/BlogNvbarItem'

const BlogNvbar = () => {
  return (
    <div className='w-full h-14 flex justify-between item-center'> 
          <BlogNvbarItem />    
          <Search />
      </div>
  )
}

export  {BlogNvbar}