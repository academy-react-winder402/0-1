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
import { UserLayout } from "../../../Screens/UserLayout/UserLayout";
import { RegisterFormStep1 } from "../../User/RegisterHolder/RegisterForms/RegisterFormStep1";
import { RegisterFormStep2 } from "../../User/RegisterHolder/RegisterForms/RegisterFormStep2";
import { RegisterFormStep3 } from "../../User/RegisterHolder/RegisterForms/RegisterFormStep3";


const Public = new createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {path: "/" ,  element: <Landing />},
        {path: "/Courses" ,  element: <Courses />}, 
        {path: "/Blog" ,  element: <Blog />},
        {path: "/Blogs/:id" ,  element: <BlogDetails />},                  
      ],
    },
        {path: "/Panel" ,  element: <Panel /> , children:[
        {path: "/Panel" ,  element: <PanelDash />},  
        {path: "/Panel/Edit" ,  element: <PanelEdit />},          
        {path: "/Panel/ChangePassword" ,  element: <PanelChangePassword />}, 
        {path: "/Panel/UserInformation" ,  element: <Information />},                  
        ]},  

        {path: "/User/Register" ,  element: <UserLayout /> , children:[
        {path: "/User/Register/" ,  element: <RegisterFormStep1 />},  
        {path: "/User/Register/Step2" ,  element: <RegisterFormStep2/>},        
        {path: "/User/Register/Step3" ,  element: <RegisterFormStep3/>},         
      ]},  



    
  ]);

  export  {Public};