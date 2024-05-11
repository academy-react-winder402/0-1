import React , {useState} from 'react'
import { CourseList } from './CourseList'

const ListCourseWrapper = () => {
const [courseStatic, setCourseStatic] = useState([
    {title:  'ری اکت ' , date : '1401/03/03' ,  teacher: "مدرس دوره" , price: '35000'},
    {title:  ' تیلویند ' , date : '1402/05/03' ,  teacher: "مدرس دوره" , price: '45000'},
    {title:  ' بک اند ' , date : '1403/07/03' ,  teacher: "مدرس دوره" , price: '55000'},
    {title:  ' پایتون ' , date : '1404/08/03' ,  teacher: "مدرس دوره" , price: '23000'},
    {title:  '  جاوااسکریپت' , date : '1405/09/03' ,  teacher: "مدرس دوره" , price: '24000'},
    {title:  'ری اکت ' , date : '1406/10/03' ,  teacher: "مدرس دوره" , price: '26000'},
       
])

  return ( 
    <div className='w-[98%] h-[95%] bg-white '>
       {courseStatic.map((item , index) =>{
        return(<CourseList key={index} title={item.title} date={item.date} teacher={item.teacher} price={item.price} />)
       })}
    </div>
  )
}

export  {ListCourseWrapper}