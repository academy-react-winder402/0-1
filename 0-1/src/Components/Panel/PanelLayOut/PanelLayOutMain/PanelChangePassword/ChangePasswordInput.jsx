import { Field, Form, Formik } from 'formik'
import React, { Fragment } from 'react'

const ChangePasswordInput = () => {
  return (
    <Fragment>
       <Formik>
          <Form>
              <div className='w-auto h-auto  flex flex-wrap justify-center items-center' >
                   <label className='w-[100%] text-right mb-10  mr-[140px]  font-bold  text-2xl text-gray-500' > رمز عبور فعلی  </label>
                    <Field className='w-[750px] h-[63px]  rounded-xl border-2' />
              </div>

              <div className='w-auto h-auto  flex flex-wrap justify-center items-center mt-10' >
                   <label className='w-[100%] text-right font-bold mb-10  mr-[140px] text-2xl text-gray-500' >    رمز عبور جدید </label>
                    <Field className='w-[750px] h-[63px]  rounded-xl border-2' />
              </div>  
                         
              <div className='w-auto h-auto  flex flex-wrap justify-center items-center mt-10' >
                   <label className='w-[100%] text-right font-bold mb-10  mr-[140px] text-2xl text-gray-500' >   تکرار رمز عبور جدید  </label>
                    <Field className='w-[750px] h-[63px]  rounded-xl border-2' />

              </div>  

                      <button className='bg-blue-700 w-64 h-20 rounded-xl text-white font-bold  mt-8 text-xl'>   ثبت اطلاعات   </button>                    
          </Form>
       </Formik>
    </Fragment>

  )
}

export  {ChangePasswordInput}