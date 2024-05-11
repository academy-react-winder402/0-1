import React from 'react'
import { List } from './List/List'
import { PanelDAshbordInput } from './PanelDahbordInput/PanelDAshbordInput'

const PanelDash = () => {
  return (
   <>
       <PanelDAshbordInput />  
       <List />
   </>
  )
}

export  {PanelDash}