import React from 'react'

const PriceCheckBox = () => {
  return (
    <div>
               <ul className=' flex justify-between '>   
          <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2 mt-1'>
              <input type='checkbox' id='checkbox1' className=' peer relative appearance-none w-8 h-6 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover:ring-blue-500 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox1' className='w-full text-black-700 font-medium peer-checked:text-black-400  cursor-pointer font-black'>   همه  </label>
          </li>
          <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2 mt-1'>
              <input type='checkbox' id='checkbox2' className='peer relative appearance-none w-8 h-6 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox2' className='w-full text-black-700 font-medium peer-checked:text-black-400 cursor-pointer font-black'>   فقط پولی  </label>
          </li>
          <li className=' relative bg-white  px-3 py-3.5 flex item-center justify-center gap-2 mt-1'>
              <input type='checkbox' id='checkbox3' className='peer relative appearance-none w-8 h-6 border rounded-full focus:outline-none checked:bg-blue-500 hover:ring hover: after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox3' className='w-full text-gray-700 font-medium peer-checked:text-black-400  cursor-pointer font-black'>   فقط رایگان  </label>
          </li>
          
       </ul>
    </div>
  )
}

export  {PriceCheckBox}