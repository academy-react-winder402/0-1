import React from 'react'
import style from './../../../../../../assets/images/Profile/Scooby.jpg'

const PanelEditImage = () => {
  return (
    <div className='w-[100%] h-auto flex flex-wrap justify-center items-center ' >
        <img className='w-64 h-64 rounded-full mt-3' src={style}/>
        <span className='w-[100%] text-gray-600 font-bold'>   ویرایش تصویر  </span>
    </div>
  )
}

export  {PanelEditImage}