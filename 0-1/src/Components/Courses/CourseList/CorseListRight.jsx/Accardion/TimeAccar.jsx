import React from 'react'
import { Accar } from './Accar'
import { CheckBox } from './CheckBox'
import style from './../../../../../assets/images/Accar/down.png'
import { TimeCheckBox } from './TimeCheckBox'

const TimeAccar = () => {
  return (
    <div>
            <div className='relative w-full  bg-white border-b-2 rounded-xl'>
        <input type='checkbox' id='input' className='peer absolute  ' />
        <div  className='font-bold h-12 text-right ' for='input'> مدت زمان دوره   </div>
        <div className='absolute top-[10px] left-[15px] rotate-0  peer-checked:rotate-180 duration-200'> <img className='w-4' src={style}/> </div> 
        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'> 
            <div className='p-[1rem] text-sm'> 
               <TimeCheckBox />
           </div>
        </div>
    </div>  
    

    </div>
  )
}

export  { TimeAccar }