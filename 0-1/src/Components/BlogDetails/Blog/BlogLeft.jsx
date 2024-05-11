import React from "react";
import { BlogFooter } from "./BlogFooter";
import { BlogText } from "./BlogText";

const BlogLeft = () => {
     return (
    <div className="w-3/5 ">
        <BlogText />
       <BlogFooter />
    </div>
  );
};

export { BlogLeft };
