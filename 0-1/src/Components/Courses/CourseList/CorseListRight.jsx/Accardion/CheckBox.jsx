import React , {useState}  from 'react'

const CheckBox = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

 const handleChange = event => {
 setSelectedCategory(event.target.value)
 }
 

  return (
    <div className=''>
       <ul className='shadow-lg'>   
          <li className=' relative bg-white border-b-2 px-3 py-3.5 flex item-center justify-center gap-2.5'>
              <input type='checkbox' id='checkbox1' className='peer relative appearance-none w-5 h-5 border rounded-sm focus:outline-none checked:bg-gray-300 hover:ring hover:ring-gray-300 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox1' className='w-full text-gray-700 font-medium peer-checked:text-grey-400 peer-checked:line-through cursor-pointer'>   xxx  </label>
          </li>
          <li className=' relative bg-white border-b-2 px-3 py-3.5 flex item-center justify-center gap-2.5'>
              <input type='checkbox' id='checkbox1' className='peer relative appearance-none w-5 h-5 border rounded-sm focus:outline-none checked:bg-gray-300 hover:ring hover:ring-gray-300 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox1' className='w-full text-gray-700 font-medium peer-checked:text-grey-400 peer-checked:line-through cursor-pointer'>   xxx  </label>
          </li>
          <li className=' relative bg-white border-b-2 px-3 py-3.5 flex item-center justify-center gap-2.5'>
              <input type='checkbox' id='checkbox1' className='peer relative appearance-none w-5 h-5 border rounded-sm focus:outline-none checked:bg-gray-300 hover:ring hover:ring-gray-300 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:top-0 '/>
              <label for='checkbox1' className='w-full text-gray-700 font-medium peer-checked:text-grey-400 peer-checked:line-through cursor-pointer'>   xxx  </label>
          </li>
          
       </ul>
    </div>
  )
}

export  {CheckBox}