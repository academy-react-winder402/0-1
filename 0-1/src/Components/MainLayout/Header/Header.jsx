import React from 'react'
import { HeaderItems } from './HeaderItems'



const Header = ({handleThemeSwitch}) => {
  return (

    <div className='w-11/12 h-[4rem] mx-20 flex justify-between  z-50  relative '> 
       <HeaderItems handleThemeSwitch={handleThemeSwitch}/>
     </div>
  )
}

export  {Header}