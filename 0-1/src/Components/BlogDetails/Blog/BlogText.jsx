import React from "react";

const BlogText = ({desc}) => {
  return (
    <div className="text-right h-[73%] mt-3 ">
      <h2 className="text-[24px] font-bold  ">
        چگونه مطالعه موثر را برای شما آسانتر کنیم
      </h2>
      <p className="text-justify leading-7 text-[15px] "> {desc} </p>
    </div>
  );
};

export { BlogText };