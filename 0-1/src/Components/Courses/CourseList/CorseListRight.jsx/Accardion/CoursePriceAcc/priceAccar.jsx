import React from 'react'

const PriceAccar = () => {
  return (
    <div className='w-full'>
       <div className='tab bg-white px-5 py-3 shadow-lg rounded-md relative'>
           <input className='appearance-none peer' type='radio' name='faq' id='faq1'/>
           <label for='faq1' className='flex items-center text-lg font-semibold after:absolute after:content-["+"] after:right-5 after:text-2xl after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45'> 
               <h2 className='mr-2 h-8 w-8 bg-cyan-400 grid place-items-center text-white rounded-full'> 01  </h2>
               <h3> what is taiwind css  </h3>
            </label>
             <div className="answer mt-5 h-0 0verflow-hidden peer-checked:h-full transition ease-in-out duration-500">
                <p>  xxxxxxxx
                    xxxxxxxx
                    xxxxxxxxx
                    xxxxxx
                    xxxxxxxxxx
                    xxxxxx
                    xxxxxxxxxxx
                    xxxxxxxxxxxxx </p>
             </div>
       </div>
    </div>
  )
}

export  {PriceAccar}