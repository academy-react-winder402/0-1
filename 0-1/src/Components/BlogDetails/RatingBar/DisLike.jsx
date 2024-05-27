import React, { useState } from "react";
import dislike from './../../../assets/images/Common/dislike.png'
import like from './../../../assets/images/Common/like.png'

const Dislike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="flex gap-4 ">
      <div className=" flex  ">
        <button
          onClick={handleLikeClick}
          className="bg-[#eceff1] rounded-2xl focus:outline-none flex items-center "
        >
          <img src={like} alt="" className="w-[24px]" />
          {likeCount}
        </button>
      </div>
      <div className=" flex">
        <button
          onClick={() => setDislikeCount(dislikeCount + 1)}
          className=" bg-[#eceff1] rounded-2xl focus:outline-none flex items-center "
        >
          <img src={dislike} alt="" />
          {dislikeCount}
        </button>
      </div>
    </div>
  );
};

export default Dislike;
