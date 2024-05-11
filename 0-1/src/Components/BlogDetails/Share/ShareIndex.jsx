import React from "react";
import { ShareText } from "./ShareText";
import { ShareSocial } from "./ShareSocial";

const ShareIndex = () => {
  return (
    <div className="w-[58.5%] h-[64px] flex justify-between mt-10 rounded-2xl bg-[#eceff1] mx-auto">
      <ShareText />
      <ShareSocial />
    </div>
  );
};

export { ShareIndex };