import React from 'react'
import { ServicesText } from './ServicesText'
import { ServicesItems } from './ServicesItems'
import { Box } from './Box'


const Services = () => {
  return (
    <div className=' h-auto w-auto flex flex-wrap mt-20 sm:w-full'>
       <ServicesText />
       <ServicesItems />
    </div>
  )
}

export  {Services}