import React from "react";
import share from './../../../assets/images/Common/share.png'

const ShareText = () => {
  return (
    <div className="w-[20%] flex mr-4 ">
      <img src={share} alt="" className="h-8 mt-4 " />
      <span className="text-[15px] font-bold mt-[20px] mx-2 ">
        اشتراک گزاری
      </span>
    </div>
  );
};

export { ShareText };
