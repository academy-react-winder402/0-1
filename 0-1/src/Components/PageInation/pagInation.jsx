import React from 'react'

 const range = (start , end) => {
      return ([...Array(end).keys()].map(el => el + start))
    };

    const pageInationItem = ({page , currenPage , onPageChange}) => {
        return (
            <li> <span> </span> {page} </li>
        )
    }

const PagInation = ({currenPage , total , limit , onPageChange}) => {

  const pageCount = Math.ceil(total / limit);
  const pages = range(1 , pageCount);
    console.log("pageCount" , pageCount , pages);
  return (
      <ul className='bg-green-100 w-96 h-12'> 
         {pages.map(page => (
            <pageInationItem   page={page} key={page} currenPage={currenPage} onPageChange={onPageChange}/>
         ))}
       </ul>
  )
}

export  {PagInation}