import React from 'react'
import style from  './../../../../assets/images/Services/chart.png';

const Box = ({label , des}) => {
  return (
    <div className='w-96 h-72  flex flex-wrap justify-center rounded-2xl mx-3 bg-white dark:bg-gray-500 sm:mb-5 sm:w-full cursor-pointer hover:blue-100'>
        <img className='w-20 h-20' src={style} />
        <h1 className='w-full h-10 dark:text-white'>   {label}  </h1>
        <h1 className='w-full h-10 dark:text-white'>  {des} </h1>
    </div>
  )
}

export  {Box}