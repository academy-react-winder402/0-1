import React from 'react'
import { InformationTop } from '../InformationTop/InformationTop'
import { InformationCourseList } from '../InformationCourses/InformationCoursesList/InformationCourseList'

const Information = () => {
  return (
    <div>
        <InformationTop />
        <InformationCourseList />
    </div>
  )
}

export  {Information}