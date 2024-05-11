import React , {useState , useEffect} from 'react'
import { Layout } from '../../Components/MainLayout/Layout'



const MainLayout = () => {
  const [theme, setTheme] = useState()

  useEffect(() => {
       if(theme == "dark"){
        document.documentElement.classList.add("dark");
       }else{
         document.documentElement.classList.remove("dark");
       }
  }, [theme])
  
const handleThemeSwitch = () => {
  setTheme(theme === "dark" ? "light" : "dark");
}


  return (
    <div className='class w-[86rem] h-auto bg-slate-100 dark:bg-black'> 
        <Layout  handleThemeSwitch={handleThemeSwitch}/> 
   </div>
  )
}

export  {MainLayout}