/* eslint-disable no-unused-vars */
import React from "react";

const CourseCardHeader = ({imageAlt,imageSrc}) => {
  return (
    <div className="relative   ">
      <div className="  h-100 m-1 rounded-xl overflow-hidden ">
        <img
          src={imageSrc}
          alt={imageAlt}
          className=" w-full h-full object-fill "
        />
      </div>
    </div>
  );
};

export { CourseCardHeader };