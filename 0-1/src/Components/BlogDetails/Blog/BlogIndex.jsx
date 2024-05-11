import React from "react";
import { BlogLeft } from "./BlogLeft";
import { BlogRight } from "./BlogRight";

const BlogIndex = () => {
  return (
    <div className="flex w-[76%] pl-8 mx-auto gap-x-5 h-[340px] ">
        <BlogRight />
        <BlogLeft />
    </div>
  );
};

export { BlogIndex };