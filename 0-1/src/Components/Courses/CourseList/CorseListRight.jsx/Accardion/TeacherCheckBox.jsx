import React from 'react'

const TeacherCheckBox = () => {
  return (        
    <div>
          <input type='text' placeholder='جست و جوی استاد' className='w-full h-10 rounded-2xl'/>

         <ul className='shadow-lg mt-2 '>   
          <li className=' relative bg-white border-b-2 px-3 py-3.5 flex item-center justify-center gap-2.5'>
              <input type='checkbox' id='checkbox1' className='ml-[12.5rem] peer relative appearance-none w-14 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover:ring-blue-500 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox1' className='w-full text-black-700 font-medium peer-checked:text-grey-400  cursor-pointer'>   ممتقانی  </label>
          </li>
          <li className=' relative bg-white border-b-2 px-3 py-3.5 flex item-center justify-center gap-2.5'>
              <input type='checkbox' id='checkbox2' className='ml-[12.5rem] peer relative appearance-none w-14 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox2' className='w-full text-black-700 font-medium peer-checked:text-black-400 cursor-pointer'>  مظفری   </label>
          </li>
          <li className=' relative bg-white border-b-2 px-3 py-3.5 flex item-center justify-center gap-2.5'>
              <input type='checkbox' id='checkbox3' className='ml-[12.5rem] peer relative appearance-none w-14 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox3' className='w-full text-gray-700 font-medium peer-checked:text-grey-400  cursor-pointer'>   مجنون    </label>
          </li>
          
       </ul>
    </div>
  )
}

export  {TeacherCheckBox}