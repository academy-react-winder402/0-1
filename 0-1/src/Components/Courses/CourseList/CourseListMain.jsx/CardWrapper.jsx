import React , {useState} from 'react'
import { CourseCard } from '../../../Common/CourseCard/CourseCard';


const CardWrapper = ({items , totalPosts , postsPerPage }) => {

const [currenPage , setCurrenPages] = useState(1);

const recordsPerPage = 4  ;
const lastIndex = currenPage * recordsPerPage;
const firstIndex = lastIndex - recordsPerPage;
const records = items.slice(firstIndex, lastIndex);
const npages = Math.ceil(items.length / recordsPerPage);
const numbers =  [...Array(npages + 1).keys()].slice(1);

  return (
    <>
    <div className=' w-full h-auto flex flex-wrap justify-between gap-4 mt-3 '>
         {records.map((item , index) => {
          return ( <CourseCard key={index} title={item.title} desc={item.desc}/>  )
         })}
    </div>      
       <div >
         <ul className=' flex justify-center h-12'> 
             <li > 
              <a  className='rounded-full bg-blue-100 mr-3 ' href='#' onClick={prePage}>  prev </a>           
              </li>              
              {
             numbers.map((n , i) => (
              
                   <li className=  { `${ currenPage === n ? `active` : `` }`} key={i}>
                     <a className='rounded-full w-[100px] ml-1 bg-white' href='#' onClick={() => changCPage (n)} > {n} </a>  
                   </li>
                ))         
             } 

             <li > 
              <a className='ml-3 bg-blue-100 rounded-full' href='#' onClick={nextPage}>  next </a>           
              </li>    
          </ul>
       </div>
  
    </>   
  )
   
  function prePage () {
   if(currenPage !== firstIndex) {
     setCurrenPages(currenPage - 1)
   }
    
  }

  function changCPage (id) {
   setCurrenPages(id)
  }

  function nextPage() {
     if(currenPage !== lastIndex) {
     setCurrenPages(currenPage + 1)
   }
  }
}

export  {CardWrapper}