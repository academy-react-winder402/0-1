import React from 'react'
import { HeroSectionItems } from './HeroSectionItems'
import style from './../../../../assets/images/LandingImages/header-bg.png'

const HeroSection = () => {
  return (
    <div className='w-full h-[40rem] flex justify-center item-center   mt-[-4rem] ' style={{width: `1440px` , height: `900px`   , backgroundImage: `url(${style})`}} > 
          <HeroSectionItems />
    </div>
  )
}

export  {HeroSection}