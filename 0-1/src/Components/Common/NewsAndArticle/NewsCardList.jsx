import React from "react";
import eye from './../../.../../../assets/images/LandingImages/LandingNeawsAndArticle/eye.png'
import calendar from './../../.../../../assets/images/LandingImages/LandingNeawsAndArticle/calendar-2.png'

const NewsCardList = ({ imgSrc, seen, sdate, title, desc , question}) => {
  return (
    <div>
      <div className=" mt-6   bg-white dark:bg-black dark:text-white  flex flex-row     rounded-3xl cursor-pointer p-1">
        <div className="right w-1/4 ">
          <img className="w-[100%] h-{100%} mt-5 rounded-xl " src={imgSrc} alt="#" />
        </div>

        <div className="left w-3/4 flex flex-col p-1 ml-2">
          <div className=" w-100 font-bold dark:text-white ">
            <div>{title}</div>
          </div>
          <div className="text-xl text-black font-bold dark:text-white">
            {question}
          </div>
          <div className=" w-100 mt-1 text-gray-500 dark:text-white">{desc}</div>

          <div className=" w-100 h-8 m-3 flex justify-start text-xs ">
            <div className="w-14 rounded-xl  flex flex-row justify-center dark:bg-white dark:text-black ">
              <img src={eye} className="h-4 mt-2" />
              <span className="text-sky-400 mr-1 mt-2">{seen}</span>
            </div>

            <div className="w-32   rounded-xl  mr-5 flex flex-row justify-center  dark:bg-white dark:text-white ">
              <img src={calendar} className="h-4 mt-2" />
              <span className="text-sky-400 mr-1 mt-2">{sdate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewsCardList };