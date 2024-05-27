import React from 'react'

const TimeCheckBox = () => {
  return (
    <div className='flex flex-col '>
         <ul className='mt-2 w-full'>   
          <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2.5 '>
            <label for='checkbox1' className='w-full text-right text-gray-700 font-medium peer-checked:text-grey-400  mr-5  cursor-pointer'>   15روزه  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li>
        <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2.5 '>
            <label for='checkbox1' className='w-full text-right text-gray-700 font-medium peer-checked:text-grey-400 mr-5  cursor-pointer'>   30روزه  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li>   
        <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2.5 '>
            <label for='checkbox1' className='w-full text-right text-gray-700 font-medium peer-checked:text-grey-400  mr-5   cursor-pointer'>  45روزه  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li> 
        <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2.5 '>
            <label for='checkbox1' className='w-full text-right text-gray-700 font-medium peer-checked:text-grey-400 mr-5  cursor-pointer'>   60روزه  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li> 
        <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2.5 '>
            <label for='checkbox1' className='w-full text-right text-gray-700 font-medium peer-checked:text-grey-400  mr-5   cursor-pointer'>   90روزه  </label>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl absolute right-[3px]'/>             
          </li>           
                     
       </ul>
    </div>
  )
}

export  {TimeCheckBox}