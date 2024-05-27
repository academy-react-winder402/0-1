import React from "react";
import { BlogFooter } from "./BlogFooter";
import { BlogText } from "./BlogText";

const BlogLeft = ({desc , teacher}) => {
     return (
    <div className="w-3/5 ">
        <BlogText desc={desc}/>
       <BlogFooter teacher={teacher} />
    </div>
  );
};

export { BlogLeft };
