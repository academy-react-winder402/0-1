import React from 'react'
import { HeroSectionItems } from './HeroSectionItems'
import style from './../../../../assets/images/LandingImages/header-bg.png'

const HeroSection = () => {
  return (
    <div className='w-[100%] h-auto flex justify-center item-center bg-no-repeat mt-[-4rem]  sm:w-full  ' style={{width: `100%` , height: `900px`   , backgroundImage: `url(${style})`}} > 
          <HeroSectionItems />
    </div>
  )
}

export  {HeroSection}