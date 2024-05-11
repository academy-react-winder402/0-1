import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderMenu } from './HeaderMenu'
import { HeaderLogin } from './HeaderLogin'
import moon from  './../../../assets/images/Header/moon.png'

const HeaderItems = ({handleThemeSwitch}) => {
  return (
    <>
    <div className='w-44 h-12 flex mt-[2rem]'> 
          <HeaderLogin />
      </div>
         
    <div className='w-96 h-12 flex justify-between mt-[2rem]' dir='rtl'>      
            <HeaderMenu />
      </div> 

    <div className=' h-12 mt-[2rem] flex'>   
            <button onClick={handleThemeSwitch} className='mr-3  w-20 '> <img src={moon} /> </button> 
             <HeaderLogo /> 
          
      </div>        
    </>
  )
}

export  {HeaderItems}




