import React from 'react'
import Sidebar from './Sidebar';
import MainPage from '../Pages/MainPage';
import Topnav from './Topnav';
function Dashboard() {
  return (
    <div className='flex' style={{display:'flex'}}>
      <Sidebar />
      <MainPage />
      
    </div>
  )
}

export default Dashboard