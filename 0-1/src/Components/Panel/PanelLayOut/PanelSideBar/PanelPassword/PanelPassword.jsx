import React from 'react'
import { Link } from 'react-router-dom'

const PanelPassword = () => {
  return (
    <div className='bg-blue-700 w-[80%] h-12  flex flex-end text-white font-bold mt-[-100px]'>
       <Link className='font-bold text-2xl' to={'/Panel/ChangePassword'}> تغییر رمز عبور </Link> 
    </div>
  )
}

export  {PanelPassword}