import React from "react";
import { Rating } from "./Rating";

const RatingRaight = () => {
  return (
    <div className="w-[45%] h-full flex gap-3 items-center ">
      <Rating />
      <span>امتیاز 20 نفر</span>
      <button
        type="submit"
        className="h-[80%] bg-[#2196f3] py-1 rounded-full focus:outline-none text-white "
      >
        ثبت دیدگاه
      </button>
    </div>
  );
};

export { RatingRaight };