import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative w-full h-96 overflow-hidden'>
        {/* Gradient background */}
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'></div>
        
        {/* Animated gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>
        
        {/* Banner image with overlay */}
        <img  
            className='w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500' 
            src="./banner.png" 
            alt="Banner"
        />
        
        {/* Animated border glow */}
        <div className='absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 bg-clip-border'></div>
        
        {/* Shine effect */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse'></div>
    </div>
  )
}

export default HeroSection
