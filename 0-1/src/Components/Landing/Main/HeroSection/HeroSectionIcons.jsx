import React , {useState} from 'react'
import { Box } from './Box'

const HeroSectionIcons = () => {

    const [heroSectionIcons, setHeroSectionIcons] = useState([
        { number: "167", label: "مدرس مجرب" },
        { number: "408،228", label: "دقیقه اموزش" },
        { number: "460،789", label: "نفر دانشجو"},
    ])

  return (
     <> 
           {heroSectionIcons.map((item,index) =>{
             return(  <Box  number={item.number} label={item.label}/>)
           })}        
     </>
  )
}

export  {HeroSectionIcons}