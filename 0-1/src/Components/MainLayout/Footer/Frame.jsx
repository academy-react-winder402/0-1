import React from 'react'

const Frame = () => {
  return (
    <div className=" w-[427px] h-[25px] divide-x">
        <ul className="flex gap-[4.6rem] ">
          <li className=" text-gray-400 hover:text-white cursor-pointer">قوانین و مقررات</li>
          <li className="border-x-white  text-gray-400 hover:text-white cursor-pointer ">درباره ما</li>
          <li className=" text-gray-400  hover:text-white cursor-pointer ">دوره های اموزشی </li>
        </ul>
      </div>
  )
}

export {Frame}