import React from 'react'

const LogoTextFooter = () => {
  return (
    <div className="w-[463px] h-[111px] flex flex-col items-center gap-y-3 mt-9 " >
    <div className="w-[166px] h-[37px] flex flex-row-reverse justify-center" >
      <logo className="w-[43.83] h-[30.68] bg-contain bg-no-repeat" >
        <img src="./Logo.svg" alt="logo" />
      </logo>
      <div className="text-xl text-white font-900 "> هگزا اسکواد </div>
    </div>
    <span className="w-[463px] h-[62px] border-black font-normal text-white text-20 leading-31 text-center font-family-BYEKAN " > هدف ما سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت </span>
  </div>
  )
}

export {LogoTextFooter}
