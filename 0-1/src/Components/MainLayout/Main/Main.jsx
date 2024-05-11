import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className=' h-auto flex flex-wrap justify-center'>
             <Outlet />
    </div>
  )
}

export  {Main}