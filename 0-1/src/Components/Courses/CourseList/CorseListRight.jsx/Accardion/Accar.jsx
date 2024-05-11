import React from 'react'
import style from './../../../../../assets/images/Accar/down.png'
import { PriceRange } from './PriceRange'
import { PriceCheckBox } from './PriceCheckBox'
const Accar = () => {
  return (
    <div className='relative   bg-white border-b-2 rounded-xl'>
        <input type='checkbox' id='input' className='peer absolute  ' />
        <div  className='font-bold h-14 text-right mr-4' for='input'> فیلتر   </div>
        <div className='absolute top-[10px] left-[15px] rotate-0  peer-checked:rotate-180 duration-200'> <img className='w-4' src={style}/> </div> 
        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'> 
            <div className='p-[1rem] text-sm'> 
               <label className='text-xl font-bold absolute right-0 '>  قیمت  </label>
                <PriceRange />    
                <PriceCheckBox />
           </div>
        </div>
    </div>
  )
}

export  {Accar}