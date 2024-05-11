import React from "react";

const CourseCardBody = ({ name, price, teacher, duration, sDate }) => {
  return (
    <div className="w-100 relative mt-3   m-1  text-right  ">
      <div className="  flex flex-col ">
        <div className="  text-l flex    justify-start  font-bold text-black  dark:text-white">
          {name}
        </div>

        <div className=" course-details mt-2 rounded-2xl  bg-zinc-200 dark:bg-black dark:text-white h-10  flex flex-row  items-center justify-center text-xs ">
          <div className="w-2/5  flex flex-row  items-center justify-center ">
            <img src="src/assets/Icons/note-2.svg" alt="#" />
            درس 202
          </div>
          <div className="w-1/5  flex flex-row  items-center justify-center ">
            <img src="src/assets/Icons/clock.svg" alt="#" />
            {duration}h
          </div>
          <div className="w-2/5  flex flex-row  items-center justify-center ">
            <img src="  src/assets/Icons/calendar-2.svg" alt="#" />
            {sDate}
          </div>
        </div>

        <div className="teacher-section mt-3 mr-1 rounded-2xl  h-10  flex flex-row  items-right justify-right text-sm font-bold">
          <div className="w-1/2   flex justify-start">
            استاد:{teacher}
          </div>
          <div className="w-1/2   flex  justify-center">
            265 دانش آموز
          </div>
        </div>


        <div className="course-price mt-2 rounded-2xl  h-10  flex flex-row  items-center justify-between text-xs  font-bold">
          <div className="w-12 flex flex-row  items-center justify-between mr-2 text-xs bg-red-200 dark:bg-white h-7 rounded-full p-3">
            <img src="src/assets/Icons/heart.svg" alt="#"/><span className="text-red-500  dark:text-black">12</span>
          </div>
          <div className="   ml-2 ">
           <span className=" text-sky-500 text-sm ml-1 dark:text-white">{price} تومان</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseCardBody };