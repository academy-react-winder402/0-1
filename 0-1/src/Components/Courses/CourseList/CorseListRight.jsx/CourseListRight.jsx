import React from 'react'
import { Accar } from './Accardion/Accar'
import { CheckBox } from './Accardion/CheckBox'
import { PriceRange } from './Accardion/PriceRange'

import { TimeAccar } from './Accardion/TimeAccar'
import { TeacherAccar } from './Accardion/TeacherAccar'
import { PriceAccar } from './Accardion/PriceAccar'
import { AccarTop } from './Accardion/AccarTop/AccarTop'




const CourseListRight = () => {
  return (
    <div className='bg-white w-3/12 h-[45rem] rounded-2xl mr-2 overflow-hidden '>
      <AccarTop />
      <PriceAccar />
      <TimeAccar />
      <TeacherAccar />
  
    </div>
  )
}

export  {CourseListRight}   