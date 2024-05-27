import React from 'react'

import { Link } from 'react-router-dom'

const Card = ({image , title , describe , currentRate , currentView , id}) => {
  return (
  <>
     <Link to={`/Blogs/${id}`}>
    <div className='w-[390px] h-[477px] bg-white flex flex-wrap justify-between mt-5 rounded-[5px] '>
          <img  className='w-96 h-60 mt-1'  src={image}/>
         <h1 className='text-xl font-bold ml-14'>  {title}    </h1>
         <h1 className='mt-3 text-sm text-gray-500'>  {describe}  </h1>
         <span className='text-blue-500 w-[80%] text-right'> 1402/11/13  </span>
         <span className='text-blue-500 '> {currentView}views  </span>

    </div>
 </Link>   
 </>
  )
}

export  {Card}