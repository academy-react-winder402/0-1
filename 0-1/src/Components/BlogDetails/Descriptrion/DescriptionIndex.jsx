import React from "react";
import { WriteComment } from "./writeComments";
import { Comments } from "./Comments";


const DescriptionIndex = () => {
  return (
    <div className="w-[58.5%]  mt-10 rounded-2xl bg-white mx-auto">
      <h2 className="w-[27.7%] h-[37px] mt-8 font-bold text-[24px]  mx-auto">
        نظر کاربران درباره این مقاله
      </h2>
      <WriteComment />
      <Comments />
    </div>
  );
};

export { DescriptionIndex };
