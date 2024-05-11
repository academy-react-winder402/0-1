import React from "react";
import { CommentsHeader } from "./CommentsHeader";
import { CommentsFooter } from "./CommentsFooter";

const CommentsReply = () => {

  const comments = [
    {
      pic: "./zamani.svg",
      name: "محمد زمانی",
      date: "2 روز پیش",
      text: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون",
    },
    {
      pic: "./hasani.svg",
      name: "محسن حسنی",
      date: "12 فروردین 1402",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
    },
    {
      pic: "./samiei.svg",
      name: "نیکی سمیعی",
      date: "16 فروردین 1402",
      text: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون",
    },
  ];

  return (
    <div className=" ">
      {comments.map((item, index) => {
        return (
          <div
            key={index}
            className=" mb-1 mx-auto w-[721px] border-r-2 pr-5 mt-4 "
          >
            <CommentsHeader pic={item.pic} name={item.name} date={item.date} />
            <p className="text-[15px] ">
              <b className="text-[#37a1f4] ">@{item.name} </b>
              {item.text}
            </p>
            <CommentsFooter />
          </div>
        );
      })}
    </div>
  );
};

export { CommentsReply };
