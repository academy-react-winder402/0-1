import React from 'react'
import { Outlet } from 'react-router-dom'
import { CourseListRight } from './CorseListRight.jsx/CourseListRight'
import { CourseListMain } from './CourseListMain.jsx/CourseListMain'

const CourseList = () => {
  return (
    <div className=' h-auto  flex gap-5 mt-14'>
            <CourseListMain />
           <CourseListRight />
    </div>
  )
}

export  {CourseList}