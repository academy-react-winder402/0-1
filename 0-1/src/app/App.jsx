import './App.css'
import { Landing } from '../Screens/Landing/Landing'
import { Public } from '../Components/Config/Router/PublickRouter'
import { RouterProvider } from "react-router-dom";


function App() {


  return (
    <>
         < RouterProvider router={Public} />
    
    </>
  )
}

export default App
