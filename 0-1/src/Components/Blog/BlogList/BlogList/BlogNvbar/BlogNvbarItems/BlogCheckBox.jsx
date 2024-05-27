import React from 'react'

const BlogCheckBox = ({filterItems , setList}) => {
  return (
    <>
    <button onClick={() =>filterItems(val)} className='leading-10 ml-10 '> جدید ترین </button>
    <div className='leading-10 cursor-pointer'>  پر بازدید ترین  </div>
    <div className='leading-10 cursor-pointer'>   محبوب ترین  </div>
    <div className='leading-10 bg-blue-500 w-28 h-[90%] rounded-2xl text-white cursor-pointer'> همه  </div>    
    </>

  )
}

export  {BlogCheckBox}