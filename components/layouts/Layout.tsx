import React from 'react'
import Footer from '../Home/Footer'
import NavBar from '../Home/NavBar'



export default function Layout({children}:any){
  return (
    <div>
          <NavBar />
          {children}
          <Footer/>
    </div>
  )
}
