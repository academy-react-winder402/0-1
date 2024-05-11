import React from "react";
import Dislike from "./DisLike";


const RatingLeft = () => {
  return (
    <div className="w-[41%] flex justify-between items-center ">
      <span> آیا از این مقاله راضی بودید؟</span>
      <Dislike />
    </div>
  );
};

export { RatingLeft };
