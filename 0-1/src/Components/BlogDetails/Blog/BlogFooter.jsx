import React from "react";
import { BlogViewDate} from "./BlogViewDate";
import { BlogTeacher } from "./BlogTeacher";



const BlogFooter = () => {
  return (
    <div className="h-[23%] flex justify-between items-end  mt-8">
       <BlogViewDate />
       <BlogTeacher />
    </div>
  );
};

export { BlogFooter };
