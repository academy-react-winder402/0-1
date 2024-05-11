import React , {useState} from 'react'
import { Card } from './BlogCard/Card'


const BlogWrapper = () => {

const [BlogList, setBlogList] = useState([
  {title: 'amir' , },
  {title: 's' , },  
 {title: 's' , },  
 {title: 'xx' , },  


])


  return (
    <div className=' w-[95%] h-auto flex flex-wrap gap-5 justify-between '>
        {BlogList.map((item , index) => {
          return(<Card key={index} />)
        })}
    </div>
  )
}

export  {BlogWrapper}