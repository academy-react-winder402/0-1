import React from "react";

const SharePic = ({ link, pic }) => {
  return (
    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-full bg-[#b0bec5] cursor-pointer hover:bg-[#2899f3] ">
      <a href={link}>
        <img src={pic} alt="" />
      </a>
    </div>
  );
};

export { SharePic };