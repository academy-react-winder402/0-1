import { BlogIndex } from "../../Components/BlogDetails/Blog/BlogIndex";
import { BlogVideo } from "../../Components/BlogDetails/BlogVideo/BlogVideo";
import { DescriptionIndex } from "../../Components/BlogDetails/Descriptrion/DescriptionIndex";
import { RatingBarIndex } from "../../Components/BlogDetails/RatingBar/RatingBarIndex";
import { ShareIndex } from "../../Components/BlogDetails/Share/ShareIndex";
import { TextBlogeDetailsIndex } from "../../Components/BlogDetails/TextBlogDetails/TextBlogDetailsIndex";
import { TextUnder } from "../../Components/BlogDetails/TextUnder/TextUnder";

const BlogDetails = () => {
  return (
  < div>
     <div className="  my-[30px]  mb-[70px] w-[98%] mx-auto " dir="rtl">
         <BlogIndex />
         <TextBlogeDetailsIndex />
         <BlogVideo />
         <TextUnder />
         <ShareIndex />
         <RatingBarIndex />
         <DescriptionIndex />
       </div>
    </div>
    );
  }
  
  export { BlogDetails };