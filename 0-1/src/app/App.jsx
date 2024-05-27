import './App.css'
import { Landing } from '../Screens/Landing/Landing'
import { Public } from '../Components/Config/Router/PublickRouter'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../Redux/Store';



function App() {


  return (
    <>
      <Provider store={store}>
         < RouterProvider router={Public} />
      </Provider>
    </>
  )
}

export default App
