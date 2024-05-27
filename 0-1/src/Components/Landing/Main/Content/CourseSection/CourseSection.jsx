import React from "react";
import { CourseCard } from "../../../../Common/CourseCard/CourseCard";
import { CustomButton } from "../../../../Common/CustomElements/CustomButton";



const CourseSection = () => {
  return (
    <div className=" sm:mx-auto">
   <div className="course-section-header flex justify-center mt-10"><h2 className="border-b-4 border-solid border-blue-400  text-3xl text-balck dark:text-white  font-bold pb-4 dar  mr-[100px]">دوره های آموزشی</h2></div>   
     <div className="course-section-body mt-5  sm:ml-[100px] mr-[80px]  flex justify-between gap-x-3 "> <CourseCard /></div>
      <div className="course-section-footer flex justify-center mt-2"><CustomButton message="مشاهده همه " /></div>   
    </div>
  );
};

export { CourseSection };