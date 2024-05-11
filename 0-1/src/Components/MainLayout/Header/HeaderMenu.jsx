import React from 'react'
import { Link } from 'react-router-dom'

const HeaderMenu = () => {
  return (
   <>
    <div className='w-16 h-12 mt-3'> <Link to='/Courses'>  دوره ها   </Link>   </div>
    <div className='w-8 h-12 mt-3'> <h1>  اساتید </h1> </div>
    <div className='w-20 h-12 mt-3 '>  <h1>  ارتباط با ما </h1>  </div>
    <div className='w-38 h-12 mt-3 '> <Link to='/Blog'>   اخبار ومقالات   </Link>    </div>
  </> 
  )
}

export  {HeaderMenu}