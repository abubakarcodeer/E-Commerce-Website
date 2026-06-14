import React, { Children } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div className='dark:bg-gray-800'>
        <Navbar />
        <div className='main-content min-h-screen'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout