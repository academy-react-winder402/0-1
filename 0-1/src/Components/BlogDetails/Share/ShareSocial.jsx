import React from "react";
import { SharePic } from "./SharePic";

const ShareSocial = () => {
  const webShare = [
    { link: "#", pic: "./facebook.png" },
    { link: "#", pic: "./twitter.png" },
    { link: "#", pic: "./instagram.png" },
  ];
  return (
    <div className="w-[30%]  flex items-center justify-end gap-4 ml-4 ">
      {webShare.map((item, index) => {
        return <SharePic key={index} link={item.link} pic={item.pic} />;
      })}
    </div>
  );
};

export { ShareSocial };