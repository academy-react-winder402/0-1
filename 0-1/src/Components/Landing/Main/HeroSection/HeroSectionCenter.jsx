import React from 'react'
import { Search } from '../../../Common/Search/Search'
import { HeroSectionText } from './HeroSectionText'
import { HeroSectionIcons } from './HeroSectionIcons'
import { Box } from './Box'

const HeroSectionCenter = () => {
  return (
    <> 
    <div className='w-full h-auto mt-10'>  <HeroSectionText /> </div>
    <div className='w-full h-auto mt-10'><Search /> </div>
    <div className='w-full h-auto md:flex   justify-between mt-16 cursor-pointer mt-5'  >  <HeroSectionIcons /> </div>    
     </>
  )
}

export  {HeroSectionCenter} 