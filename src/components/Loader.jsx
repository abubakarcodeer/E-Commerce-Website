import React from 'react'

const Loader = () => {
   return (
      <div className='flex justify-center items-center py-20'>
         <div className='relative w-16 h-16'>
            {/* Outer rotating ring */}
            <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-400 animate-spin'></div>
            
            {/* Middle rotating ring - reversed */}
            <div className='absolute inset-2 rounded-full border-4 border-transparent border-b-pink-400 border-l-cyan-300 animate-spin animate-reverse' style={{animationDirection: 'reverse'}}></div>
            
            {/* Inner dot */}
            <div className='absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-sm opacity-50'></div>
            
            {/* Center text */}
            <div className='absolute inset-0 flex items-center justify-center'>
               <div className='text-white text-xl font-bold animate-pulse'>⚡</div>
            </div>
         </div>
         <div className='mt-4 text-center text-gray-400'>
            <p className='text-sm font-medium'>Loading...</p>
         </div>
      </div>
   )
}

export default Loader