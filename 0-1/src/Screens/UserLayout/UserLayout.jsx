import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


const UserLayout = () => {
  const locationPath =  useLocation().pathname

  const handleRegisterSteps = (location) => {
    if (location === "/User/Register/Step1") {
      return <h2>مرحله اول</h2>;
    } else if (location === "/User/Register/Step2") {
      return <h2>مرحله دوم</h2>;
    } else if (location === "/User/Register/Step3") {
      return <h2>مرحله سوم</h2>;
    }
  };

  return (
    <div className='h-[1000px] w-[1500px] bg-slate-100 flex justify-center items-center'>
       <div className='bg-slate-50 w-1/2 h-1/2 '> 
       {handleRegisterSteps(locationPath)}
           <Outlet />
       </div>
   
    </div>
  )
}

export  {UserLayout}