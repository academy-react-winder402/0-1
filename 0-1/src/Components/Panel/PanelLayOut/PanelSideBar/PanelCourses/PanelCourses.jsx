import React from 'react'
import { Link } from 'react-router-dom'

const PanelCourses= () => {
  return (
    <div className='bg-blue-700 w-[80%] h-10 flex flex-end font-bold text-white mt-[-100px]'>
       <Link className='font-bold text-2xl' to={'/Panel/UserInformation'} >   اطلاعات کاربری  </Link>
      
      </div>
  )
}

export  {PanelCourses}