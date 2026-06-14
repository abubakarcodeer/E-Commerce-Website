import React from 'react'
import { useNavigate } from 'react-router-dom'

const category = [
    {
        image:'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image:'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    },
]

const Category = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col mt-12 mb-8'>
        <div className='text-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>Shop by Category</h2>
            <p className='text-gray-400 text-sm'>Explore our diverse collection</p>
        </div>
        
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar pb-4">
            <div className="flex gap-4 lg:gap-6 px-4">
                {
                    category.map((item,index)=>(
                        <div key={index} className='flex-shrink-0'>
                            <div onClick={()=>navigate(`/category/${item.name}`)}
                                className='relative w-20 h-20 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-cyan-500/30 overflow-hidden'>
                                    
                                    {/* Gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300'></div>
                                    
                                    {/* Image */}
                                    <div className="flex justify-center items-center h-full relative z-10">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className='w-12 lg:w-16 h-12 lg:h-16 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg'
                                        />
                                    </div>
                                    
                                    {/* Glow effect on hover */}
                                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300'></div>
                                 </div>

                                 <h1 className='text-xs lg:text-sm dark:text-gray-300 text-center font-bold title-font capitalize mt-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300'>{item.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Category