import React from 'react'
import { Accar } from './Accar'
import { TeacherCheckBox } from './TeacherCheckBox'
import style from './../../../../../assets/images/Accar/down.png'

const TeacherAccar = () => {
  return (

    <div className='relative w-full  bg-white rounded-xl  '>
<input type='checkbox' id='input' className='peer   ' />
<div  className='font-bold h-14 text-right ' for='input'> اساتید دوره   </div>
<div className='absolute top-[10px] left-[15px] rotate-0  peer-checked:rotate-180 duration-200'> <img className='w-4' src={style}/> </div> 
<div className='max-h-0 overflow-hidden peer-checked:max-h-full '> 
    <div className='p-[1rem] text-sm'> 
         <TeacherCheckBox />
   </div>
</div>
</div>  



  )
}

export  {TeacherAccar}