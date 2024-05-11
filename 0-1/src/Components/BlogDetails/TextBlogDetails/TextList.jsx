import React from "react";

const TextList = ({ circle, title, text }) => {
  return (
    <div className="flex mt-2">
      <img src={circle} alt="" className="h-[11%] mt-[10px] ml-3 " />
      <p className="text-justify leading-7 text-[15px]  ">
        <b>{title}</b>
        {text}
      </p>
    </div>
  );
};

export { TextList };