import React , {useState , useEffect} from 'react'
import { Card } from './BlogCard/Card'
import { getAllNews } from '../../../../Core/Services/Api/Blog/GetAllNews'


const BlogWrapper = () => {

const [BlogList, setBlogList] = useState([{}])

useEffect(() => {
getAll()
}, [] )

const getAll = async () => {
  const res = await getAllNews();
  setBlogList(res?.news);
  console.log("res" , res)
}


  return (
    <div className=' w-[95%] h-auto flex flex-wrap gap-2 justify-between mt-5 bg-white rounded-xl'>
        {BlogList?.map((item , index) => {
          return(<Card key={index} id={item.id} image={item.currentImageAddressTumb} title={item.title} describe={item.miniDescribe} currentRate={item.currentRate}  currentView={item.currentView}/>)
        })}
    </div>
  )
}

export  {BlogWrapper}