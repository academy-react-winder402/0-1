import React from 'react'
import { InformationCourseListStatic } from '../InformationCoursesStatic/InformationCourseListStatic'
import { BuyingCourses } from './BuyingCourses/BuyingCourses'
import { RecommendedCourses } from './RecommendedCourses/RecommendedCourses'

const InformationCourseList = () => {
  return (
    <div className='w-[1500px] h-[800px]  mt-10 flex flex-wrap gap-5'>
        <InformationCourseListStatic />
        <BuyingCourses />
        <RecommendedCourses />

    </div>
  )
}

export  {InformationCourseList}