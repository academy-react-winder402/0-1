import React from 'react'
import style from './../../../../../assets/images/Accar/down.png'

const Sort = () => {
  return (
  
    <div className='relative w-full  rounded-xl shadow-[6px-6px-10px] '>
    <input type='checkbox' id='input' className='peer absolute  top-2 left-5 ' />
    <label  className='font-bold ' for='input'>  محبوب ترین   </label>

    <div className='max-h-0 overflow-hidden peer-checked:max-h-full'> 
        <div className='p-[1rem] text-sm'> 
        <ul className='liststle-none  rounded-xl w-[15rem] bg-white'> 
             <li className='border-b-2 mt-2 text-lg mx-auto'>   برترین ها  </li>
             <li className='border-b-2 mt-2 text-lg  mx-auto' >  جدیدترین ها  </li>
             <li className='border-b-2 mt-2 text-lg mx-auto'>  محبوب ترین ها  </li>      
         </ul>           
       </div>
    </div>
</div>
  )
}

export  {Sort}