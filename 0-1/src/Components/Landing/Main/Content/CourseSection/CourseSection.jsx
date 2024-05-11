import React from "react";
import { CourseCard } from "../../../../Common/CourseCard/CourseCard";
import { CustomButton } from "../../../../Common/CustomElements/CustomButton";



const CourseSection = () => {
  return (
    <div>
   <div className="course-section-header flex justify-center mt-2"><h2 className="border-b-4 border-solid border-blue-400  text-3xl text-balck dark:text-white  font-bold pb-4 dar">دوره های آموزشی</h2></div>   
     <div className="course-section-body"> <CourseCard /></div>
      <div className="course-section-footer flex justify-center mt-2"><CustomButton message="مشاهده همه " /></div>   
    </div>
  );
};

export { CourseSection };