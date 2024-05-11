import React from "react";
import { CommentsFooter } from "./CommentsFooter";
import { CommentsHeader } from "./CommentsHeader";
import { CommentsReply } from "./CommentsReply";




const Comments = () => {
    const replise = [
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
    <div className="w-[92.7%] mt-10 mx-auto">
      {replise.map((item, index) => {
        return (
          <div key={index} className=" mb-5 mx-auto ">
            <CommentsHeader pic={item.pic} name={item.name} date={item.date} />
            <p className="text-[15px] ">{item.text}</p>
            <CommentsFooter />
          </div>
        );
      })}
      <CommentsReply />
    </div>
  );
};

export { Comments };