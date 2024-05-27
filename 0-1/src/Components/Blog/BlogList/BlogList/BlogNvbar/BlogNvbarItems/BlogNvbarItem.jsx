import React from 'react'
import { BlogCheckBox } from './BlogCheckBox'

const BlogNvbarItem = () => {
  
    const filterItems = (cat) => {
      const newItems  = List.filter((newVal) => newVal.category === cat)
     setItem(newItems);
    }

  return (
    <div className='w-[44%] h-auto  flex justify-between  items-center bg-white rounded-xl font-bold text-gray-500 mt-1 mr-4 shadow-lg'>
        <BlogCheckBox  filterItems={filterItems}/>
    </div>
  )
}

export  {BlogNvbarItem}