import React from 'react'
import { Search } from '../../../Common/Search/Search'
import { HeroSectionText } from './HeroSectionText'
import { HeroSectionIcons } from './HeroSectionIcons'
import { Box } from './Box'

const HeroSectionCenter = () => {
  return (
    <> 
    <div className='w-full h-36 mt-10'>  <HeroSectionText /> </div>
    <div className='w-full h-14 mt-10'><Search /> </div>
    <div className='w-full h-36  flex justify-between mt-16 '  >  <HeroSectionIcons /> </div>    
     </>
  )
}

export  {HeroSectionCenter}