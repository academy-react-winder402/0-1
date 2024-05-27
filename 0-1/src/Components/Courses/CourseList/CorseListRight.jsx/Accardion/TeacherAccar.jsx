import React from 'react'
import { Accar } from './Accar'
import { TeacherCheckBox } from './TeacherCheckBox'
import style from './../../../../../assets/images/Accar/down.png'

const TeacherAccar = () => {
  return (

    <div className='relative w-full border-b border-b-gray-100 bg-white rounded-xl  '>
<input type='checkbox' id='input' className='peer  mr-20  absolute top-[10px] left-[25px]  '/>
<div  className='font-bold h-14 text-right  mr-10 mt-4' for='input'> اساتید دوره   </div>

<div className='max-h-0 overflow-hidden peer-checked:max-h-full border-b-2 rounded-xl'> 
    <div className='p-[1rem] text-sm'> 
         <TeacherCheckBox />
   </div>
</div>
</div>  



  )
}

export  {TeacherAccar}