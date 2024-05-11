import react , {useState , useRef} from 'react'

const RegisterModal = () => {
   const [isLogined, setIsLogined] = useState(true)
   
   const phoneNumberInputRaf = useRef();

   const submitHandle = (event) => {
      event.preventDefault();

      const enteredPhoneNumber = phoneNumberInputRaf.current.value;

     
   }

    return (
      <div className=" text-center  ">
        <div className=" w-full h-full ">
  
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
         
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          
            <div className="bg-white rounded-3xl  py-8 px-4 w-[26rem] h-[24rem]  shadow  sm:px-10">
              <div className="flex flex-row-reverse justify-between w-full ">
    
                <h2 className="my-6 text-center text-xl font-bold tracking-tight text-gray-800"> {isLogined ? 'ایجاد حساب کاربری' : 'ورود به حساب'} </h2>
                <div className=" my-6 w-10 h-10 bg-gray-100 rounded-xl pt-2" > <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" m-auto cursor-pointer w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke= "#3b82f6" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"  />
                      </svg>
                </div>
   
              </div>
            
              <form className="space-y-9" action="#" method="POST">
                <div>
     
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      type="tell"
                      placeholder=' شماره موبایل'
                      autoComplete="number"
                      ref={phoneNumberInputRaf}
                      required
                      size="11"
                      pattern="[0-9]{4}-[0-9]{7}"
                      className=" text-right block w-full appearance-none rounded-full border border-gray-300  px-3 py-3.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-item-center">
                  <button
                    type="submit"
                    className="flex m-auto w-[185px] justify-center rounded-full border border-transparent bg-[#2196f3] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    دریافت کد تأیید
                  </button>
                </div>
                <div className="flex w-full justify-center " >
                  <a href="" className=" text-blue-500 hover:underline hover:text-blue-600 text-[12px] cursor-pointer">  وارد شوید </a>
                  <label htmlFor="#" className="  block text-xs text-gray-900 ">
                      حساب کاربری دارید؟
                  </label>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
  
        </div>
      </div>
    )
  }
  
  export {RegisterModal}