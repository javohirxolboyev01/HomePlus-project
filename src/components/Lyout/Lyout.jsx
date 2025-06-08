import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const Lyout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default Lyout
