import React from "react";
import style from './../../.../../../assets/images/LandingImages/LandingNeawsAndArticle/news.png'
import eye from './../../.../../../assets/images/LandingImages/LandingNeawsAndArticle/eye.png'
import calendar from './../../.../../../assets/images/LandingImages/LandingNeawsAndArticle/calendar-2.png'

const NewsCardTail = ({ imgSrc, title, desc, seen, sdate }) => {
  return (
    <div>
      <div className=" mt-1 relativ  flex flex-col  justify-items-center  gap-1  rounded-3xl cursor-pointer p-2 ">
        <div className="w-100 flex justify-center h-1/3 mt-5 ">
          <img className="w-[80%] h-[30%]" src={style} alt="#"  />
        </div>
        <div className=" w-100 h-8 m-3 flex justify-start ">
          <div className="w-14 rounded-xl  bg-sky-200 flex flex-row justify-center pt-1 ml-16  dark:bg-white dark:text-black">
            <img src={eye} className="h-5 " />
            <span className="text-sky-400 mr-1">{seen}</span>
          </div>

          <div className="w-32   rounded-xl  mr-5 bg-sky-200 flex flex-row justify-center pt-1 ml-2 dark:bg-white dark:text-black">
            <img src={calendar} className="h-5 " />
            <span className="text-sky-400 mr-1 ">{sdate}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-black dark:text-white rounded-xl mt-5 bg-red-100 ">
        <div className=" w-100 mt-5 ">
          <div >{title}</div>
        </div>
        <div className=" w-100 mt-5 b">{desc}</div>
       </div>
      </div>
    </div>
  );
};

export { NewsCardTail };