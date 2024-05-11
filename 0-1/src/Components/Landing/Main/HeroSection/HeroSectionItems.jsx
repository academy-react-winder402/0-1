import React from 'react'
import { HeroSectionCenter } from './HeroSectionCenter'
import style from './../../../../assets/images/HeroSection/left.png'
import right from './../../../../assets/images/HeroSection/right.png'

const HeroSectionItems = () => {
  return (
    <> 
         <div className='w-40 h-96 mr-10 mt-[15rem]'> 
           <img className='w-full h-80' src={style} />
        </div>
         <div className='w-1/2 h-96 mt-20'> 
             <HeroSectionCenter />
          </div>
         <div className='w-40 h-96  ml-10 mt-[15rem]'> 
           <img className='w-full  h-80' src={right}/> 
          </div>         
    </>
  )
}

export  {HeroSectionItems}