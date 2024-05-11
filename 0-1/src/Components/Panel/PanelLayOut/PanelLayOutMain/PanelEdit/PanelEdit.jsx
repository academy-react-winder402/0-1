import React from 'react'
import { PanelEditImage } from './PanelEditImage/PanelEditImage'
import { UserInformation } from './UserInformation/UserInformation'

const PanelEdit = () => {
  return (
   <>
         <PanelEditImage />
     <div className=' w-[100%] h-[800px] flex flex-wrap  '>  
         <UserInformation />     
    </div>            
  </>
  )
}

export  { PanelEdit } 