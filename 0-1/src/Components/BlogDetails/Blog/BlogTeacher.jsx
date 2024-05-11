import React from "react";
import teacher from './../../../assets/images/BlogDetails/blogdTeacher.png'

const BlogTeacher = () => {
  return (
    <div className=" bg-white shadow-[0_2px_6px_-2px_rgba(0,0,0,0.9)] rounded-xl w-auto flex  items-center gap-x-3 h-[80%]  ">
      <img src={teacher} alt=""  />
      <span className="text-[14px] ml-5 ">بهاره یزدانی</span>
    </div>
  );
};

export { BlogTeacher };