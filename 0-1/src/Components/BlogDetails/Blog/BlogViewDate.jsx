import React from "react";
import { BlogView } from "./BlogView";
import { BlogDate } from "./BlogDate";


const BlogViewDate = () => {
  return (
    <div className="w-[23%] h-[50%] flex justify-between ">
       <BlogView />
      <img src="./bluecircle.png" alt="" className="h-[11%] mt-[5px] " />
        <BlogDate />
    </div>
  );
};

export { BlogViewDate };