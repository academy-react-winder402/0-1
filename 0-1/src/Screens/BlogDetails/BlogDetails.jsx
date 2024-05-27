import react , { useState , useEffect } from "react";
import { BlogIndex } from "../../Components/BlogDetails/Blog/BlogIndex";
import { BlogVideo } from "../../Components/BlogDetails/BlogVideo/BlogVideo";
import { DescriptionIndex } from "../../Components/BlogDetails/Descriptrion/DescriptionIndex";
import { RatingBarIndex } from "../../Components/BlogDetails/RatingBar/RatingBarIndex";
import { ShareIndex } from "../../Components/BlogDetails/Share/ShareIndex";
import { TextBlogeDetailsIndex } from "../../Components/BlogDetails/TextBlogDetails/TextBlogDetailsIndex";
import { TextUnder } from "../../Components/BlogDetails/TextUnder/TextUnder";
import { getBlogById } from "../../Core/Services/Api/Blog/GetNewsById";
import { useParams } from "react-router-dom";

const BlogDetails = () => {

 const params = useParams();
  
   const [blog, setBlog] = useState([{}])

     const BlogId = async () => {
      const res = await getBlogById(params.id);
      setBlog(res?.detailsNewsDto)
     }

     
     useEffect(() => {
       BlogId();
     }, [])
     

  return (
  < div>
     <div className="  my-[30px]  mb-[70px] w-[98%] mx-auto " dir="rtl">
         <BlogIndex desc={blog?.describe} img={blog?.currentImageAddress} teacher={blog?.autor}/>
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