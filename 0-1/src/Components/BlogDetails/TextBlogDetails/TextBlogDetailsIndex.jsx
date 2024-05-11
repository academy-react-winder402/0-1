import React from "react";
import { TextContent } from "./TextContent";
import { UnorderedList } from "./UnorderedList";

const TextBlogeDetailsIndex = () => {
  return (
    <div className="w-[58.5%] h-[505px] mx-auto mt-10">
      <h2 className="text-[24px] font-bold mb-2  text-right ">چگونه آموزش ببینیم ؟</h2>
      <TextContent />
      <UnorderedList />
    </div>
  );
};

export { TextBlogeDetailsIndex };