import React from 'react'
import { Search } from '../../../Common/Search/Search'
import { Sort } from './Sort/Sort'

const NvbItems = () => {
  return (
    <>
     <div className='w-[250px] h-12  bg-white mt-1 rounded-xl'> <Sort /> </div>
     <div className='w-auto  rounded-xl'> <Search /> </div>
     <div className='w-[100px] h-12 bg-white mt-2 rounded-xl flex justify-center items-center'> second grid  </div>   
    </> 
  )
}

export  {NvbItems}



