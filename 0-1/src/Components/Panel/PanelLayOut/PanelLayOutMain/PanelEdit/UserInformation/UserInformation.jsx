import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router-dom'

const UserInformation = () => {
  return (
    <>
    <Formik> 
        <Form>
<div className='w-[100%] h-[100%] flex flex-wrap justify-center items-center'>
    <div className='w-[500px] h-[150px] bg-white ml-4  flex flex-wrap justify-center items-center'>
       <label className='w-[100%] mt-5 text-gray-500 font-bold text-2xl'>  نام  </label>
       <Field className='border-2 w-[90%] h-[50px] rounded-xl ' name='title'/>
    </div>

    <div className='w-[500px] h-[150px] bg-white ml-4  flex flex-wrap justify-center items-center'>
       <label className='w-[100%] mt-5 text-gray-500 font-bold text-2xl'>    نام خانوادگی  </label>
       <Field className='border-2 w-[90%] h-[50px] rounded-xl ' name='title'/>
    </div>

    <div className='w-[500px] h-[150px] bg-white ml-4  flex flex-wrap justify-center items-center'>
       <label className='w-[100%] mt-5 text-gray-500 font-bold text-2xl'>  کد ملی  </label>
       <Field className='border-2 w-[90%] h-[50px] rounded-xl ' name='title'/>
    </div>
    
    <div className='w-[500px] h-[150px] bg-white ml-4  flex flex-wrap justify-center items-center'>
       <label className='w-[100%] mt-5 text-gray-500 font-bold text-2xl'>  ایمیل  </label>
       <Field className='border-2 w-[90%] h-[50px] rounded-xl ' name='title'/>
    </div>

    <div className='w-[500px] h-[150px] bg-white ml-4  flex flex-wrap justify-center items-center'>
       <label className='w-[100%] mt-5 text-gray-500 font-bold text-2xl'>  تاریخ تولد  </label>
       <Field className='border-2 w-[90%] h-[50px] rounded-xl ' name='title'/>
    </div>

    <div className='w-[500px] h-[150px] bg-white ml-4  flex flex-wrap justify-center items-center'>
       <label className='w-[100%] mt-5 text-gray-500 font-bold text-2xl'>  شماره موبایل  </label>
       <Field className='border-2 w-[90%] h-[50px] rounded-xl ' name='title'/>
    </div>
</div>
      </Form>
   </Formik>
    </>
  )
}

export  {UserInformation}