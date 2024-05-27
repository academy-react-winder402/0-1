

import { CourseCardHeader } from "./CourseCardHeader";
import { CourseCardBody } from "./CourseCardBody";

const CourseCard = ({ image , likeId, id, date , teacher, student , likeCount , like, dissLike , dissLikeCount, title , price}) => {

  return (
  <>     
            <div  className="bg-white rounded-xl dark:bg-black ">
              <div className="relative   shadow-xl  rounded-2xl cursor-pointer p-2 dark:bg-gray-500  w-[300px] h-[389px] " dir="rtl">
                <div className="w-100 ">
                  <CourseCardHeader
                    imageSrc={image}          
                    name={title}
                  />
                </div>
                
                <div className=" w-100">
                  <CourseCardBody
                    href={title}
                    teacher={teacher}
                    rate={title}
                    price={title}
                    name={title}
                    desc={title}
                    duration={title}
                    sDate={title}
                  />
                </div>
              </div>
            </div>
   
    </>
  );
};

export { CourseCard };