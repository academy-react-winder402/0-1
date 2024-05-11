import React from 'react'

const CourseList = ({title , price , date , teacher}) => {
  return (
    <div className='bg-purple-100 w-[100%] h-[7%] flex justify-between leading-[60px]  font-bold rounded-xl mt-2'>
       <div className='ml-3'>   مدیریت  </div>
       <h1>   {price} </h1> 
       <h1> {date}   </h1>
       <h1> {teacher} </h1> 
       <h1>  {title} </h1>    
       <div className='mr-3'>  تصویر </div>     
    </div>
  )
}

export  {CourseList}