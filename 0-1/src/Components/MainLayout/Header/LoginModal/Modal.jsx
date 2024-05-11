import React from 'react'
import { LogIn } from '../../../../Screens/LogIn/Login'

const Modal = ({open , onCLose , children}) => {
  return (
    <div className={` absoluet top-[50%]  left-[50%]  w-96 h-96 fixed inset-0 flex justify-center item-center transition-colors ${open ? "" : "invisible"}`} onClick={onCLose}>
        <div onClick={(e) => e.stopPropagation()}>
             {children}
              <LogIn />

        </div>
       
 
    </div>
  )
}

export  {Modal}