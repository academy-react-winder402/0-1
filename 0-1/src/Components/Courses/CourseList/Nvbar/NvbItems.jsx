import React from 'react'
import { Search } from '../../../Common/Search/Search'
import { Sort } from './Sort/Sort'
import { SearchInCourses } from '../../../../Core/Services/Api/Course/SearchInCourses'
import { useMyCourses } from '../../../../Core/provider/CourseListProvider'

const NvbItems = ({searchHandler}) => {
   const {setCourseList} = useMyCourses()

   const SearchCourse = async (e) => {
    // const res = await SearchInCourses(e.target.value)
    // setCourseList(res)

    // console.log("res" , res);

    searchHandler(e.target.value)
   }

  return (
    <>
     <div className='w-[180px] h-14  bg-white  rounded-xl z-50'> <Sort /> </div>
     <div className=' rounded-xl'> 
     <div> 
         <input  className='lg:w-[689px]  h-14  rounded-xl  text-right pr-3 shadow-lg ' type='text' onChange={SearchCourse} placeholder='?چی میخوای یاد بگیری' />  
    </div>
      </div>
     <div className=' h-14 bg-white rounded-xl flex justify-center items-center   '> second grid  </div>   
    </> 
  )
}

export  {NvbItems}



