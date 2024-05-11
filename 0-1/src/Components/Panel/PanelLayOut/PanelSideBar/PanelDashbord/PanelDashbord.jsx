import React from 'react'
import { Link } from 'react-router-dom'

const PanelDashbord = () => {
  return (
    <div className='bg-blue-700 w-[80%] h-12 text-white font-bold flex flex-end mt-[-100px] '> 
    <Link className='font-bold text-2xl' to={'/Panel'}>   داشبرد   </Link>
    </div>
  )
}

export  {PanelDashbord}