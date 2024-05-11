import React from 'react'

const EmailBox = () => {
  return (
    <div className=" w-[480px] h-[105px] flex flex-col justify-between items-center border-black">
        <span className="text-sm font-normal font-family-BYEKAN text-center text-white border-1 w-[285px] h-[25px]"> برای دریافت اخبار از طریق ایمیل ثبت نام  کنید </span>
        <form className="w-[480px] h-[56px]  relative">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-[480px] h-[55px] min-w-0 absolute left-0 rounded-full bg-gray-200 pl-5 text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-600 focus:ring-indigo-600 hover:bg-white "
              placeholder="Example@gmail.com"
            />
            
            <button
              type="submit"
              className="sm:w-[90px] md:w-[77px] h-[40px] text-center items-center absolute top-2 right-2 justify-center rounded-full bg-indigo-600 py-1 px-3 text-base font-semibold leading-7 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-sm " >
                خبرم کن
            </button>
            
        </form>
    </div>
  )
}

export {EmailBox}