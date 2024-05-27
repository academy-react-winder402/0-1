import React from 'react'
import { HeroSectionCenter } from './HeroSectionCenter'
import style from './../../../../assets/images/HeroSection/left.png'
import right from './../../../../assets/images/HeroSection/right.png'

const HeroSectionItems = () => {
  return (
    <> 
         <div className='w-0 2xl:w-40 h-auto mr-10 ml-10 mt-[15rem] '> 
           <img className='w-full h-80' src={style} />
        </div>
         <div className='w-1/2 h-auto mt-20  '> 
             <HeroSectionCenter />
          </div>
         <div className='w-0 2xl:w-40 h-auto  ml-10 mt-[15rem] mr-10'> 
           <img className='w-full  h-80' src={right}/> 
          </div>         
    </>
  )
}

export  {HeroSectionItems}