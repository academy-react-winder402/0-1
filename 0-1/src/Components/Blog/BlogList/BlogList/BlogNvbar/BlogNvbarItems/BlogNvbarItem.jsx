import React from 'react'
import { BlogCheckBox } from './BlogCheckBox'

const BlogNvbarItem = () => {
  
    const filterItems = (cat) => {
      const newItems  = List.filter((newVal) => newVal.category === cat)
     setItem(newItems);
    }

  return (
    <div className='w-[40%] h-auto  flex justify-between item-center bg-white rounded-xl font-bold text-gray-500 mt-1'>
        <BlogCheckBox  filterItems={filterItems}/>
    </div>
  )
}

export  {BlogNvbarItem}