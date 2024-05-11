import React from 'react'
import style from './../../../../assets/images/LandingImages/landingHeader/hour.png'

const Box = ({number , label}) => {
  return (
    <div className='w-56 h-52 bg-gray-100 rounded-2xl border-5 border-white '>
        <img className='w-14 h-14 mx-auto mt-5' src={style}/>
        <div className='mt-3'>   {number} </div>        
        <div className='mt-2 text-xl'>  {label} </div>
    </div>
  )
}

export  {Box}