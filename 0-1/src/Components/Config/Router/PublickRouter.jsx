import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../../app/Layout/MainLayout";
import { Landing } from "../../../Screens/Landing/Landing";
import { Courses } from "../../../Screens/Courses/Courses";
import { Blog } from "../../../Screens/Blog/Blog";
import { Panel } from "../../../Screens/Panel/Panel";

import { PanelEdit } from "../../Panel/PanelLayOut/PanelLayOutMain/PanelEdit/PanelEdit";
import { PanelDash } from "../../Panel/PanelLayOut/PanelLayOutMain/PanelDash/PanelDash";
import { PanelChangePassword } from "../../Panel/PanelLayOut/PanelLayOutMain/PanelChangePassword/PanelChangePassword";
import { Information } from "../../Panel/PanelLayOut/PanelLayOutMain/PanelInformation/Information/Information";
import { BlogDetails } from "../../../Screens/BlogDetails/BlogDetails";


const Public = new createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {path: "/" ,  element: <Landing />},
        {path: "/Courses" ,  element: <Courses />}, 
        {path: "/Blog" ,  element: <Blog />},
        {path: "/Blog-Details" ,  element: <BlogDetails />},                  
      ],
    },
        {path: "/Panel" ,  element: <Panel /> , children:[
        {path: "/Panel" ,  element: <PanelDash />},  
        {path: "/Panel/Edit" ,  element: <PanelEdit />},          
        {path: "/Panel/ChangePassword" ,  element: <PanelChangePassword />}, 
        {path: "/Panel/UserInformation" ,  element: <Information />},                  
        ]},  
    
  ]);

  export  {Public};