import React from 'react'
import style from './../../../../../assets/images/Profile/Scooby.jpg'

const PanelProfile = () => {
  return (
    <div className='bg-blue-700 w-[80%] h-[200px] border-b-2 flex flex-wrap justify-center items-center'>       
        <img className='w-32 h-32 rounded-full' src={style} />
         <h1 className='w-full  font-bold '>     بیتا قنبری   </h1>   
    </div>
  )
}

export  {PanelProfile}