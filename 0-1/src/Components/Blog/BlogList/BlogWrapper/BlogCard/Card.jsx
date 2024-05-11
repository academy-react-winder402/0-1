import React from 'react'
import style from './../../../../../assets/images/Blog/BlogList/photo.png'

const Card = () => {
  return (
    <div className='w-96 h-auto bg-white flex flex-wrap justify-between mt-5 rounded-[5px]'>
          <img  className='w-96 h-60 mt-1'  src={style}/>
         <h1 className='text-xl font-bold ml-14'>  چگونه مطالعه را برای شما اسانتر کنیم     </h1>
         <h1 className='mt-3 text-sm text-gray-500'> لورم  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از
              طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و 
             سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد.
         </h1>
         <span className=''>1402/11/13  </span>
         <span className=''> 202 بازدید  </span>
    </div>
  )
}

export  {Card}