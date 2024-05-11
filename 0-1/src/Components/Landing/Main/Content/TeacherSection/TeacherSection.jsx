import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Teachers } from "../../../../Common/TeacherSection/Teachers";

const TeacherSection = () => {

   const teacherData = [
    {
      id: 1,
      name: "استاد شماره  1",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 2,
      name: "استاد شماره  2",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 3,
      name: "استاد شماره  3",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 4,
      name: "4",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 5,
      name: "استاد شماره  5",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 6,
      name: "استاد شماره  6",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 7,
      name: "استاد شماره  7",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 8,
      name: "استاد شماره 8",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 9,
      name: "استاد 9",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    {
      id: 10,
      name: "استاد شماره  10",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WdbIokQYwx8Qnz1eRdAgKvzKUcoFRNahQzrcYnj__w&s",
      courseCount: "202",
      catg: "برنامه نویسی ",
    },
    // More products...
  ];
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

  };
  return (
    <div className=" bg-[#E3F2FD] h-[500px] overflow-hidden  dark:bg-black dark:text-white">
      <div className="course-section-header flex justify-center mt-2 items-center dark:text-white ">
        <h2 className="border-b-2 border-solid border-blue-400  text-xl mt-2 font-bold text-2xl  dark:text-white">
          اساتید برتر
        </h2>
      </div>
      <Slider {...settings}>
        {teacherData.map((product) => (
          <div key={product.id}>
            <Teachers
              name={product.name}
              imgSrc={product.imageSrc}
              courseCount={product.courseCount}
              catg={product.catg}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { TeacherSection };
