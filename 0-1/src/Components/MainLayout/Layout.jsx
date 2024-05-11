import React from 'react'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({handleThemeSwitch}) => {
  return (
    <div >
          <Header handleThemeSwitch={handleThemeSwitch}/>

           <Main />
          <Footer />
    </div>
  )
}

export  {Layout}