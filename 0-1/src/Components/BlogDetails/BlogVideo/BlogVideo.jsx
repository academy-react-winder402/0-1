import React from "react";

const BlogVideo = () => {
  return (
    <div className="w-[58.5%] h-[480px]  mx-auto">
      <video
        className="h-full object-cover  rounded-3xl"
        controls
        poster="./poster.png "
        src="./assets/LifeCycle in Class(Mounting).mp4"
        width="100%"
      ></video>
    </div>
  );
};

export { BlogVideo };