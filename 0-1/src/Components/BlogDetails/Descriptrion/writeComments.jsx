import React from "react";

const WriteComment = () => {
  return (
    <div className="w-[92.7%] h-[164px] mt-10 mx-auto">
      <div>
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full h-[100px] pt-3 px-4 border-2 border-gray-200 rounded-lg shadow-sm outline-blue-400 sm:text-sm"
          placeholder="نظر خودتو بنویس..."
          defaultValue={""}
        />
      </div>
      <button
        type="button"
        className=" h-[48px] w-[84px] bg-[#2196f3] mx-auto mt-3 flex items-center justify-center focus:outline-none rounded-full text-white hover:text-gray-200"
      >
        ارسال
      </button>
    </div>
  );
};

export { WriteComment };
