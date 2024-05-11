import React , {useState} from 'react'
import { CourseListNbar } from './CourseListNbar'
import { CardWrapper } from './CardWrapper'


const CourseListMain = () => {
  const [items, setItems] = useState([
    {title: 'aa' ,  desc: 'aa'},
    {title: 'bb' ,  desc: 'bb'},
    {title: 'cc' ,  desc: 'cc'},
    {title: 'dd' ,  desc: 'dd'},
    {title: 'qq' ,  desc: 'qq'},  
    {title: 'ee' ,  desc: 'ee'},
    {title: 'tt' ,  desc: 'tt'},
    {title: 'rr' ,  desc: 'rr'},
    {title: 'uu' ,  desc: 'uu'},   
    {title: 'aa' ,  desc: 'aa'},
    {title: 'bb' ,  desc: 'bb'},
    {title: 'cc' ,  desc: 'cc'},
    {title: 'dd' ,  desc: 'dd'},
    {title: 'qq' ,  desc: 'qq'},  
    {title: 'ee' ,  desc: 'ee'},
    {title: 'tt' ,  desc: 'tt'},
    {title: 'rr' ,  desc: 'rr'},
    {title: 'uu' ,  desc: 'uu'},       
    {title: 'aa' ,  desc: 'aa'},  
    {title: 'bb' ,  desc: 'bb'},  
    {title: 'bb' ,  desc: 'bb'},
    {title: 'cc' ,  desc: 'cc'},
    {title: 'dd' ,  desc: 'dd'},
    {title: 'qq' ,  desc: 'qq'},  
    {title: 'ee' ,  desc: 'ee'},
    {title: 'tt' ,  desc: 'tt'},
    {title: 'rr' ,  desc: 'rr'},
    {title: 'uu' ,  desc: 'uu'},   
   
])

  return (
    <div className=' w-5/6 h-auto '>
        <CourseListNbar />
        <CardWrapper  items={items}  />

    </div>
  )
}

export  {CourseListMain}