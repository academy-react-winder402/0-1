import React from 'react'
import { NvbItems } from '../Nvbar/NvbItems'

const CourseListNbar = ({searchHandler}) => {
  return (
    <div className='w-[100%]  h-14 flex  gap-2 '> 
       <NvbItems searchHandler={searchHandler} />
    
    </div>
  )
}

export  {CourseListNbar}