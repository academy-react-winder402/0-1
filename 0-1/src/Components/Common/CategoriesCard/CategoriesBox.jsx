import React from "react";


const CategoriesBox = ({ imgSrc, title, desc }) => {
  return (
    <div >
      <div className="h-72 mt-5 w-80 relative border-2  dark:border-black bg-white dark:bg-black flex flex-col justify-items-center  shadow-xl  rounded-3xl cursor-pointer p-2  dark:bg-gray-500">
        <div className="w-100 flex justify-center h-1/3 mt-5 ">
          <img src={imgSrc} alt="#" />
        </div>

        <div className=" w-100 mt-5 dark:text-white ">
          <div>{title}</div>
        </div>
        <div className=" w-100 mt-5 dark:text-white  ">
          {desc}
        </div>
      </div>
    </div>
  );
};

export { CategoriesBox };