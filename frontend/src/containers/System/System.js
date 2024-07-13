import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './'
const System = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex w-full flex-auto min-h-screen'>
      <div className='bg-[#e1e1e1]'>
      <Sidebar/>
      </div>
      <div className='flex-auto w-full h-full p-4'>
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default System