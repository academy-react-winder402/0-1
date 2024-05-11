import React from 'react'

const TimeCheckBox = () => {
  return (
    <div>
               <ul className=''>   
          <li className=' relative bg-white  px-3 py-3.5 w-full '>
              <input type='checkbox' id='checkbox1' className='ml-[14rem] peer relative appearance-none w-5 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover:ring-blue-500 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox1' className=' w-full text-black-700  bg-red-100   font-medium peer-checked:text-grey-400   cursor-pointer'>   روزه  15 </label>
          </li>
          <li className=' relative bg-white  px-3 py-3.5  w-full '>
              <input type='checkbox' id='checkbox1' className='ml-[14rem] peer relative appearance-none w-5 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox2' className='w-full text-black-700 font-medium peer-checked:text-black-400 cursor-pointer'> 30 روزه    </label>
          </li>
          <li className=' relative bg-white  px-3 py-3.5   w-full '>
              <input type='checkbox' id='checkbox1' className='ml-[14rem] peer relative appearance-none w-5 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox3' className='w-full text-gray-700 font-medium peer-checked:text-grey-400  cursor-pointer'>    روزه 45   </label>
          </li>

          <li className=' relative bg-white  px-3 py-3.5 w-full '>
              <input type='checkbox' id='checkbox1' className='ml-[14rem] peer relative appearance-none w-5 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox3' className='w-full text-gray-700 font-medium peer-checked:text-grey-400  cursor-pointer'>   60 روزه    </label>
          </li>   
          
          <li className=' relative bg-white  px-3 py-3.5 w-full '>
              <input type='checkbox' id='checkbox1' className='ml-[14rem] peer relative appearance-none w-5 h-5 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox3' className='w-full text-gray-700 font-medium peer-checked:text-grey-400  cursor-pointer'>   90 روزه    </label>
          </li>                   
          
       </ul>
    </div>
  )
}

export  {TimeCheckBox}