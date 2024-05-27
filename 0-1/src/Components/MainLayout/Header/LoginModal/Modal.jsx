import React from 'react'
import { LogIn } from '../../../../Screens/LogIn/Login'

const Modal = ({open , onCLose , setopen,  children}) => {
  return (
    <div className={` absoluet top-[50%]  left-[50%]  w-96 h-auto fixed inset-0 flex justify-center item-center transition-colors ${open ? "" : "invisible"}`} onClick={onCLose}>
      
        <div onClick={(e) => e.stopPropagation()}>
             {children}
              <LogIn onClose={onCLose} setopen={setopen} open={open} />

        </div>
       
 
    </div>
  )
}

export  {Modal}