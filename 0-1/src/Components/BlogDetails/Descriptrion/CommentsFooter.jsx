import React from "react";
import { CommentsLike } from "./CommentsLike";


const CommentsFooter = () => {
  return (
    <div className="flex items-end mt-2 ">
      <CommentsLike />
      <span className="flex gap-[6px] cursor-pointer ">
        پاسخ
        <img src="./messages-2.svg" alt="" />
      </span>
    </div>
  );
};

export { CommentsFooter };