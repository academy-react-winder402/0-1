import React from 'react'

import { CourseHero } from '../../Components/Courses/CourseHero/CourseHero'
import { CourseList } from '../../Components/Courses/CourseList/CourseList'

const Courses = () => {
  return (
    <div className='w-full h-auto'>
       <CourseHero />
       <CourseList />
    </div>
  )
}

export  {Courses}