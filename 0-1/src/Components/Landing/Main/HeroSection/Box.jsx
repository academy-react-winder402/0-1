import React from 'react'
import style from './../../../../assets/images/LandingImages/landingHeader/hour.png'

const Box = ({number , label}) => {
  return (
    <div className='w-56 h-auto bg-gray-100 rounded-2xl border-5 border-white sm:mx-auto  '>
        <img className='w-14 h-14 mx-auto mt-10' src={style}/>
        <div className='mt-[20px] '>   {number} </div>        
        <div className='mt-8 mb-[10px] text-xl'>  {label} </div>
    </div>
  )
}

export  {Box}