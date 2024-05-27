import React from "react";
import { BlogViewDate} from "./BlogViewDate";
import { BlogTeacher } from "./BlogTeacher";

const BlogFooter = ({teacher}) => {
  return (
    <div className="h-[23%] flex justify-between items-end  mt-[70px] ">
       <BlogViewDate />
       <BlogTeacher teacher={teacher} />
    </div>
  );
};

export { BlogFooter };
