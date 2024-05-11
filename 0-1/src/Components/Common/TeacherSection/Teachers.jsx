import React from "react";


const Teachers = ({ name, imgSrc, courseCount, catg }) => {
  return (
    <div className=" bg-transparent mt-5 h-fit flex flex-col justify-items-center dark:text-white    rounded-3xl cursor-pointer p-2 ">
      <div className=" bg-transparent w-100 flex justify-center h-1/3 mt-5  ">
        <div className="relative ">
          <img src={imgSrc} alt="#" className="rounded-2xl  h-[200px] " />
          <div className=" absolute top-1 right-3 h-4  rounded-xl  bg-sky-200 flex flex-row justify-center pt-1  ">
            <span className="text-sky-400 mr-1 text-xs pl-1 ">
              {courseCount}
            </span>
            <img src="src/assets/Icons/eye.png" className="h-2" />
          </div>
        </div>
      </div>
      <div className=" w-100  m-3 flex flex-col  ">
        <span className="mt-2 text-gray-700 font-bold text-xl dark:text-white">{name}</span>
        <span className="mt-2  text-gray-500 text-md dark:text-white">{catg}</span>
      </div>
    </div>
  );
};

export { Teachers };