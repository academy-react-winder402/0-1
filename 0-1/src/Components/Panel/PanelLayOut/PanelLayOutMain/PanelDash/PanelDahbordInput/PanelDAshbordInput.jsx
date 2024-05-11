import React from 'react'

const PanelDAshbordInput = () => {
  return (
    <div className='w-[90%] h-[5%] flex gap-5 justify-between  mt-5'>
    <input className=' w-28 rounded-xl border-2' type='number'/>               
    <input  className='w-[80%] h-[100%] text-right rounded-xl border-2' type='text' placeholder='چی میخوای یاد بگیری' />  
  </div>
  )
}

export  {PanelDAshbordInput}