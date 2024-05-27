import React from 'react'
import style from './../../../../../assets/images/Accar/down.png'
import { PriceRange } from './PriceRange'
import { PriceCheckBox } from './PriceCheckBox'
const Accar = () => {
  return (
    <div className='relative border-b border-b-gray-100  rounded-xl'>
        <input type='checkbox' id='input' className='peer  mr-20  absolute top-[10px] left-[25px]' />
        <div  className='font-bold h-14 text-right mr-10 mt-3' for='input'> فیلتر   </div>
        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'> 
            <div className='p-[1rem] text-sm '> 
               <label className='text-xl font-bold absolute right-[20px] mr-4  '>  قیمت  </label>
                <PriceRange />    
                <PriceCheckBox />
           </div>
        </div>
    </div>
  )
}

export  {Accar}