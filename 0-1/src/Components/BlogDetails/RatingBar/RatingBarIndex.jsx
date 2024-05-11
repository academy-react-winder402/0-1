import React from "react";
import { RatingLeft } from "./RatingLeft";
import { RatingRaight } from "./RatingRight";


const RatingBarIndex = () => {
  return (
     <div className="w-[58.5%] h-[48px] flex justify-between mt-10 rounded-2xl  mx-auto">
      <RatingRaight />
      <RatingLeft />
    </div>
  );
};

export { RatingBarIndex };
