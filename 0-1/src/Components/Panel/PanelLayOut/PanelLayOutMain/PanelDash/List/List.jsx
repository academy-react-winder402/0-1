import React from 'react'
import { ListStatic } from './ListStatic/ListStatic'
import { ListCourseWrapper } from './ListCourseWrapper/ListCourseWrapper'

const List = () => {
  return (
    <div className='w-[90%] h-[95%] flex flex-wrap justify-center'>
        <ListStatic />
        <ListCourseWrapper />
    </div>
  )
}

export  {List}