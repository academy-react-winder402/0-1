import React , {useState , useEffect} from 'react'
import { CourseCard } from '../../../Common/CourseCard/CourseCard';
import { getCourseListAll } from '../../../../Core/Services/Api/Course/GetCourseListAll';
import { useMyCourses } from '../../../../Core/provider/CourseListProvider';
import PageInation from '../../../Common/PageInation/PageInation';

const CardWrapper =  () => {

  const {courseList, setCourseList} = useMyCourses();
  const [totalPages, setTotalPages] = useState();
  const [rowsOfPage, setRowOfPage] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
   getListAll();
  }, [])

  const getListAll = async () => {
   const res = await getCourseListAll(pageNumber, rowsOfPage );
   setCourseList(res?.courseFilterDtos);
   setTotalPages(Math.ceil(res?.totalCount / rowsOfPage));
  }

  const handlePageClick = (e) => {
    setPageNumber(e.selected + 1);
  };

  return (

    <div className=' w-auto h-auto flex flex-wrap justify-between gap-4 mt-3  '>            
      {courseList?.courseFilterDtos?.map((item , index) => {
        return(
           <CourseCard 
           image={item.tumbImageAddress}
           likeId={item.userLikedId}
           key={index}
           id={item.courseId} 
           date={item.lastUpdate} 
           teacher={item.teacherName}
           student={item.currentRegistrants}
           likeCount={item.likeCount}
           like={item.userIsLiked}
           dissLike={item.currentUserDissLike} 
           dissLikeCount={item.dissLikeCount}
           title={item.title} 
           price={item.cost} 
           level={item.levelName}  
                   
           />
           
          )
          
      })}

      <PageInation   handlePageClick={handlePageClick} totalPages={totalPages}/>
       </div>

  )
  
}

export  {CardWrapper}