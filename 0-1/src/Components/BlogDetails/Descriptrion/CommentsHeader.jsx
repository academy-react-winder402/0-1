import React from "react";

const CommentsHeader = ({ pic, name, date }) => {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-[6px] items-center font-bold ">
        <img src={pic} alt="" />
        <span>{name}</span>
      </div>
      <span className="text-[13px] ">{date}</span>
    </div>
  );
};

export { CommentsHeader };