import React from 'react'
import style from './../../../../../assets/images/Accar/down.png'

const Sort = () => {
  return (
  
    <div className='relative w-full  rounded-xl  py-4  '>
    <input type='checkbox' id='input' className='peer absolute  top-[25px] left-[5px]' />
    <label  className='font-medium ' for='input'>  محبوب ترین   </label>

    <div className='max-h-0 overflow-hidden peer-checked:max-h-full bg-white '> 
        <div className='p-[1rem] text-sm '> 
        <ul className='liststle-none text-right  rounded-xl w-[100%] bg-white'> 
             <li className=' border-b mt-2 text-lg py-2 '>   برترین ها  </li>
             <li className='border-b mt-2 text-lg py-2 ' >  جدیدترین ها  </li>
             <li className='border-b mt-2 text-lg py-2'>  محبوب ترین ها  </li>      
         </ul>           
       </div>
    </div>
</div>
  )
}

export  {Sort}