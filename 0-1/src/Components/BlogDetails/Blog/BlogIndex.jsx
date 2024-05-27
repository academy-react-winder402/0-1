import React from "react";
import { BlogLeft } from "./BlogLeft";
import { BlogRight } from "./BlogRight";

const BlogIndex = ({desc , img , teacher}) => {
  return (
    <div className="flex w-[76%] pl-8 mx-auto gap-x-5 h-[340px]  ">
        <BlogRight img={img}/>
        <BlogLeft desc={desc} teacher={teacher}/>
    </div>
  );
};

export { BlogIndex };