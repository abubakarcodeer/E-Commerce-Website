import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='text-gray-600 body-font bg-green-600'>
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-white' >
            <span className='text-xl font-bold'>E-Pak</span>
          </a>
          <p className='text-sm text-gray-100 sm:ml-4 sm:border-l-2 sm:pl-4 sm:border-gray-200 sm:mt-0 mt-4'>
            ©2025 e-pakistan -
            <Link to={'/'} className='text-gray-100 ml-1' rel='noopener noreferrer'
            target='_blank'>
              @epakistan
            </Link>
          </p>

          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
              <FaFacebook className=' ml-3 text-gray-100 cursor-pointer' size={24} />
              <FaInstagram className='ml-3 text-gray-100 cursor-pointer'size={24} />
              <FaTwitter className='ml-3 text-gray-100 cursor-pointer' size={24}/>
              <FaLinkedin className='ml-3 text-gray-100 cursor-pointer' size={24} />
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer