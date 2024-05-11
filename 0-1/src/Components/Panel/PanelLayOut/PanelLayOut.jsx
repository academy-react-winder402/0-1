import React from 'react'
import { PanelLayOutMain } from './PanelLayOutMain/PanelLayOutMain'
import { PanelSideBar } from './PanelSideBar/PanelSideBar'
import { PanelTop } from './PanelTop/PanelTop'

const PanelLayOut = () => {
  return (
    <div className='w-[2000px] h-[1200px]  bg-slate-100 flex gap-10 rtl my-auto mx-auto ' dir='rtl'>
        <PanelSideBar />
         <PanelLayOutMain />

    </div>
  )
}

export  {PanelLayOut}