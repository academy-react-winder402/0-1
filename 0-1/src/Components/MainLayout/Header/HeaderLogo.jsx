import React from 'react'
import style from  './../../../assets/images/LandingImages/landingHeader/logo.png'

const HeaderLogo = () => {
  return (
    <div className='w-full h-full flex jutify-center'>
        <img className='w-10 h-8 flex mt-3' src={style}/>
        <h1 className='mt-3 ml-4'>  هگزا اسکواد    </h1>
    </div>
  )
}

export  {HeaderLogo}