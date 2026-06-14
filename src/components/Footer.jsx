import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='text-gray-400 body-font bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 border-t border-purple-500/30'>
        <div className="container px-5 py-8 md:py-12 mx-auto flex flex-col md:flex-row items-center justify-between">
          <a className='flex title-font font-bold items-center md:justify-start justify-center group'>
            <span className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300'>E-Pak</span>
          </a>
          
          <p className='text-xs md:text-sm text-gray-400 sm:ml-4 sm:border-l sm:pl-4 sm:border-purple-500/30 sm:mt-0 mt-4 text-center md:text-left'>
            ©{new Date().getFullYear()} E-Pak Premium Store -
            <Link to={'/'} className='text-cyan-400 hover:text-purple-400 ml-1 font-semibold transition-colors duration-300' rel='noopener noreferrer' target='_blank'>
              @epakistan
            </Link>
          </p>

          <span className='inline-flex sm:ml-auto sm:mt-0 mt-6 gap-4 justify-center sm:justify-end'>
              <FaFacebook className='text-gray-400 hover:text-cyan-400 cursor-pointer transition-all duration-300 hover:scale-125' size={20} />
              <FaInstagram className='text-gray-400 hover:text-purple-400 cursor-pointer transition-all duration-300 hover:scale-125' size={20} />
              <FaTwitter className='text-gray-400 hover:text-cyan-300 cursor-pointer transition-all duration-300 hover:scale-125' size={20}/>
              <FaLinkedin className='text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-125' size={20} />
          </span>
        </div>
        
        {/* Bottom divider */}
        <div className='border-t border-purple-500/20 py-4'>
          <div className='container px-5 mx-auto'>
            <p className='text-center text-xs text-gray-500'>Made with 💜 by E-Pak Team | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer