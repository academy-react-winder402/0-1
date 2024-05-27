import React , {useState} from 'react'
import { Box } from './Box'

const ServicesItems = () => {
    const [servicesItems, setSevicesItems] = useState([
      {label: "سادگی خدمات" , des:" سهولت دسترسی و خدمات به سرتاسر کشور با کمترین هزینه بدون نیاز به مراجعه حضوری"} ,
      {label: "فرصت های شغلی" , des: " سهولت دسترسی و خدمات به سرتاسر کشور با کمترین هزینه بدون نیاز به مراجعه حضوری"} ,
      {label: "مدارک معتبر" , des: " سهولت دسترسی و خدمات به سرتاسر کشور با کمترین هزینه بدون نیاز به مراجعه حضوری"} ,   
    ])
  return (
    <div className='h-auto  gap-10 lg:flex mt-5 md:grid-cols-1  md:mx-auto sm:mx-auto cursor-pointer '>
        {servicesItems.map((items , index) => {
            return (<Box  label={items.label} des={items.des}/>)
        })}
    </div>
  )
}

export  {ServicesItems}