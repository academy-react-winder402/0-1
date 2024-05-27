import React, {useEffect} from 'react'
import { SearchInCourses } from '../../../Core/Services/Api/Course/SearchInCourses'
import { useMyCourses } from '../../../Core/provider/CourseListProvider'

const Search = () => {
  return (
    <div> 
         <input  className='lg:w-[689px]  h-14  rounded-xl  text-right pr-3 shadow-lg ' type='text' placeholder='?چی میخوای یاد بگیری' />  
    </div>
  )
}

export  {Search}