import React, { Children } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen'>
        {/* Animated background elements */}
        <div className='fixed inset-0 overflow-hidden pointer-events-none -z-10'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
          <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '2s'}}></div>
        </div>
        
        <Navbar />
        <div className='main-content min-h-screen relative z-10'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout