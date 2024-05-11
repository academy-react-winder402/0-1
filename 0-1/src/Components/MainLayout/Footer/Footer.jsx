import React from 'react'
import { LogoTextFooter } from './LogoTextFooter'
import { EmailBox } from './EmailBox'
import { Frame } from './Frame'
import { Social } from './Social'


const Footer = () => {
  return (
    <div className="bg-[#252641] flex flex-col items-center gap-y-9 sm:px-[20px] md:px-[25px] lg:px-[12px] 2xl:px-[80px] "> 
    
      <LogoTextFooter />
      <EmailBox />
      <Frame />
      <Social />
   </div>
  )
}

export  {Footer}