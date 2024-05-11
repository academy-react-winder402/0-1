import React from 'react'
import { PanelProfile } from './PanelProfile/PanelProfile'
import { PanelDashbord } from './PanelDashbord/PanelDashbord'
import { PanelCourses } from './PanelCourses/PanelCourses'
import { PanelComments } from './PanelComment/PanelComment'
import { PanelLogOUt } from './PanelLogOut/PanelLogOut'
import { PanelPassword } from './PanelPassword/PanelPassword'
import { PanelEditPrf } from './PanelEditPrf/PanelEditPrf'

const PanelSideBar = () => {
  return (
    <div className='bg-blue-700 w-[20%] h-[99%] flex flex-wrap rounded-2xl ml-1  justify-center' >
      <PanelProfile />
      <PanelDashbord />
      <PanelEditPrf />
      <PanelPassword />
      <PanelCourses />  
      <PanelLogOUt />
      <PanelComments />
    </div>
  )
}

export  {PanelSideBar}