import React, { useState } from "react";
import { TextList } from "./TextList";


const UnorderedList = () => {
  const webText = [
    {
      circle: "./bluecircle.png",
      title: " افزایش انرژی: ",
      text: " کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به جریان خون، کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند. این احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به ارمغان بیاورد.",
    },
    {
      circle: "./bluecircle.png",
      title: " افزایش هوشیاری: ",
      text: " مصرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود بخشد. کافئین می‌تواند عملکرد مغزی را بهبود دهد و به شما کمک کند در موقعیت‌های مختلف ازجمله مطالعه، کار، و مذاکره بهتر عمل کنید.",
    },
    {
      circle: "./bluecircle.png",
      title: " افزایش سطح انرژی بدن : ",
      text: " کافئین می‌تواند به افزایش سطح هورمون‌هایی مانند اپینفرین (آدرنالین) کمک کند. این هورمون‌ها به تنظیم مقدار قند خون و افزایش فعالیت قلب و عروق کمک می‌کنند، که نتیجه آن افزایش انرژی و تحرک در بدن است.",
    },
  ];

  return (
    <div>
      {webText.map((item, index) => {
        return (
          <TextList
            key={index}
            circle={item.circle}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
};

export { UnorderedList };
