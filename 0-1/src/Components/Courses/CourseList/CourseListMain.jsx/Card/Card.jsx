import React , {useState} from 'react'
import { CardHeader } from './CardHeader/CardHeader'

const Card = ({title , desc}) => {




  return (

    <div className='w-72 h-80 bg-white rounded-2xl mt-2'> 
      <CardHeader  title={title} desc={desc}/>
    
     </div>
  )
}

export {Card};