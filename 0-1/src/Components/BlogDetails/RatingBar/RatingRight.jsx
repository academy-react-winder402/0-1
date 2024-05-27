import React , {useState} from "react";



const RatingRaight = () => {


  return (
    <div className="artcileDeailtCardsSettings flex-row-all-center justify-between">
      <p className="f-semiBold">چه امتیازی برای این مقاله میدهید؟</p>
      <div className="flex-row-all-center">
  
      </div>
      <span>امتیاز 20 نفر</span>
      <button
        type="submit"
        className="h-[80%] bg-[#2196f3] py-1 rounded-full focus:outline-none text-white "
      >
        ثبت دیدگاه
      </button>
    </div>
  );
};

export { RatingRaight };