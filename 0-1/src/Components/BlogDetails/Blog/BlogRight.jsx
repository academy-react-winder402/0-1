import React from "react";
import { BlogLike } from "./BlogLike";

const BlogRight = ({img}) => {

  return (
    <div className="relative w-[45%] h-full ">
       <BlogLike />

      <img src={img} alt="bloge-img" className="  mt-4 " />
    </div>
  );
};

export { BlogRight };
