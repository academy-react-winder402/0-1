import React , {useState} from 'react'
import style from './../../../assets/images/LandingImages/landingHeader/Card.png'
import { Modal } from './LoginModal/Modal'
import { Link } from 'react-router-dom'

const HeaderLogin = () => {
  const [open, setOpen] = useState(false)
  return (
      <>
      <Link to='/User/Register'>
         <div className='bg-blue-500 w-36 h-12 mt-2 text-white text-center text-sm leading-10 rounded-3xl' onClick={() => setOpen(true)}>  ورود به حساب  </div>
         <div  className='w-20 h-14'>    
           <img className=' w-full h-ull' src={style}/>
         </div>
      </Link>   
      </>
  )
}

export  {HeaderLogin}