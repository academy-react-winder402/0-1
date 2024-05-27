import React , {useState , useEffect} from 'react'
import { CourseListNbar } from './CourseListNbar'
import { CardWrapper } from './CardWrapper'
import CourseListProvider from '../../../../Core/provider/CourseListProvider'

const CourseListMain =  ({searchHandler}) => {

  
  return (
    <div className='w-[75%] h-auto  '>
    <CourseListProvider>
        <CourseListNbar searchHandler={searchHandler} />
        <CardWrapper   />
     </CourseListProvider>
    </div>
  )
}

export  {CourseListMain}