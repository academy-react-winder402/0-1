import React from 'react'
import { Outlet } from 'react-router-dom'

const PanelLayOutMain = () => {
  return (
    <div className='bg-slate-100 w-[78%] h-[100%] flex flex-wrap justify-center'>
        <div className='w-[100%] h-[7%] bg-white border-b-2 mt-5'>     </div>
     <div className='bg-white w-[100%] h-[95%] flex flex-wrap justify-center ' >    
        <Outlet />
    </div> 
    </div>
  )
}

export  {PanelLayOutMain}