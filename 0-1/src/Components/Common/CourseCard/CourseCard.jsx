import React from "react";

import { CourseCardHeader } from "./CourseCardHeader";
import { CourseCardBody } from "./CourseCardBody";

const CourseCard = () => {
  const courseList = [
    {
      id: 1,
      name: "دوره  React",
      teacher: "استاد 1",
      href: "#",
      imageSrc:
      "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      price: "1400",
      rate: 3,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    },
    {
      id: 2,
      name: "دوره  React",
      teacher: "استاد 2",
      href: "#",
      imageSrc:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
      rate: 4,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    },
    {
      id: 3,
      name: "دوره  React",
      teacher: "استاد 3",
      href: "#",
      imageSrc:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
      rate: 5,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    },
    {
      id: 4,
      name: "دوره  React",
      teacher: "استاد 4",
      href: "#",
      imageSrc:
        "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
      rate: 1,

      desc: "adsadgagargegegaafvafvafvafv",
      duration: 60,
      sDate: "1403.01.01",
    }
    // More products...
  ];
  return (
    <div className=" font-sans  ">
      <div className="mx-auto max-w-3xl py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 mx-5 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mx-auto">
          {courseList.map((product) => (
            <div key={product.id} className="bg-white rounded-xl dark:bg-black ">
              <div className="relative   shadow-xl  rounded-2xl cursor-pointer p-2 ">
                <div className="w-100">
                  <CourseCardHeader
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                    name={product.name}
                  />
                </div>
                
                <div className=" w-100">
                  <CourseCardBody
                    href={product.href}
                    teacher={product.teacher}
                    rate={product.rate}
                    price={product.price}
                    name={product.name}
                    desc={product.desc}
                    duration={product.duration}
                    sDate={product.sDate}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CourseCard };