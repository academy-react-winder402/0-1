import React from 'react'

const PriceCheckBox = () => {
  return (

    <div className='flex  justify-between'>
         <ul className='mt-2 w-full flex' dir='rtl'>   
          <li className='w-1/3 relative mt-1 '>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl '/>  
            <label for='checkbox1' className='w-auto text-gray-700 font-medium peer-checked:text-grey-400    cursor-pointer'>  فقط رایگان  </label>
          </li>

        <li className='w-1/3 relative mr-3   '>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl '/>               
            <label for='checkbox1' className='w-auto text-gray-700 font-medium peer-checked:text-grey-400    cursor-pointer'> فقط پولی </label>   
          </li> 

        <li className='w-1/3 relative   '>
            <input type='checkbox' id='checkbox1' className='w-[20px] h-[20px] rounded-3xl '/>  
            <label for='checkbox1' className='w-auto text-gray-700 font-medium peer-checked:text-grey-400    cursor-pointer'>  همه </label>           
          </li>                     
       </ul>
    </div>
  )
}

export  {PriceCheckBox}