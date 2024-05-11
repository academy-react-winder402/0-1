import React, { useState } from "react";

const BlogLike = () => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="like-container  border-white absolute  right-6 top-9 z-10">
      <button
        onClick={handleLikeClick}
        className="bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6)] text-[#f44336] px-[14px] pt-3 focus:outline-none flex flex-row-reverse text-[20px] rounded-full h-[38px] items-center"
      >
        {likeCount}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#f00"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[25px] h-[28px] mt-[3px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#f44336"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </div>
  );
};

export { BlogLike };