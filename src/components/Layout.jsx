import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar/NabBar'

const Layout = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout