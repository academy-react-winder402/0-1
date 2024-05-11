const LoginModal = () => {
    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-40 text-center  ">
          <div className=" w-full h-full ">
    
          <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
           
    
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            
              <div className="bg-white rounded-3xl  py-8 px-4 w-[26rem] h-[30.6rem]  shadow  sm:px-10">
                <div className="flex flex-row-reverse justify-between w-full ">
      
                  <h2 className="my-6 text-center text-xl font-bold tracking-tight text-gray-800">ورود به حساب</h2>
                  <div className=" my-6 w-10 h-10 bg-gray-100 rounded-xl pt-2" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" m-auto cursor-pointer w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke= "#3b82f6" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"  />
                        </svg>
                  </div>
     
                </div>
              
                <form className="space-y-9" action="#" method="POST">
                  <div>
       
                    <div className="mt-1">
                      <input
                        id="login"
                        name="login"
                        type="text"
                        placeholder=' ایمیل یا شماره موبایل'
                        autoComplete="email-number"
                        required
                        className=" text-right block w-full appearance-none rounded-full border border-gray-300  px-3 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
    
                  <div>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='رمز عبور'
                        autoComplete="current-password"
                        required
                        className="text-right block w-full appearance-none rounded-full border border-gray-300 px-3 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex  justify-between w-full">
                    
                    <a
                        thref=""
                        className=" text-blue-500 hover:underline hover:text-blue-600 text-xs cursor-pointer">
                        رمز عبور را فراموش کردم
                    </a>
                    <div className="flex justify-end  ">
                      <label htmlFor="remember-me" className="ml-2 px-2 block text-xs text-gray-900 cursor-pointer ">
                        مرا به خاطر بسپار
                      </label>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 cursor-pointer mt-1 text-blue-600 focus:ring-indigo-500"
                      />
     
                    </div>
    
                  </div>
    
                  <div>
                    <button
                      type="submit"
                      className="flex m-auto w-[185px] justify-center rounded-full border border-transparent bg-[#2196f3] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      دریافت کد تأیید
                    </button>
                  </div>
                  <div className="flex justify-end m-[6rem] " >
                    <a href="" className=" text-blue-500 hover:underline hover:text-blue-600 text-xs cursor-pointer"> ثبت نام</a>
                    <label htmlFor="#" className="  block text-xs text-gray-900 ">
                        حساب کاربری ندارید؟
                    </label>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
    
          </div>
        </div>
      );
}

export {LoginModal}
