import React from 'react'

const TeacherCheckBox = () => {
  return (        
    <div className='flex flex-col '>
          <input type='text' placeholder='جست و جوی استاد' className='w-full h-10 rounded-xl text-right pr-3 text-sm border'/>

         <ul className='mt-2 w-full'>   
          <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2.5 '>
            <label for='checkbox1' className='w-auto text-gray-700 font-medium peer-checked:text-grey-400  pl-20   cursor-pointer'>   ممتقانی  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li>
          <li className='w-full relative bg-white  px-3 py-3.5 flex item-center justify-center gap-x-8'>
            <label for='checkbox1' className='w-full text-gray-700 font-medium peer-checked:text-grey-400  pl-20  mr-3   cursor-pointer'>    بحرالعلومی  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li>
          <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-3 '>
            <label for='checkbox1' className='w-auto text-gray-700 font-medium peer-checked:text-grey-400  pl-20   cursor-pointer'>   مظفری  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li>          
       </ul>
    </div>
  )
}

export  {TeacherCheckBox}