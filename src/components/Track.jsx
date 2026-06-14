import React from 'react'
import Svg from '../assets/shopping-bag-.svg'

const products = [
    { title: "Premium Tshirts", desc: "Our T-Shirts are 100% made of cotton" },
    { title: "Casual Tshirts", desc: "Perfect for everyday wear" },
    { title: "Sport Tshirts", desc: "Breathable and comfortable" },
];

const Track = () => {
    return (
        <section className='py-16 md:py-20'>
            <div className='container mx-auto px-5'>
                
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>Why Choose Us</h2>
                    <p className='text-gray-400 text-sm'>Premium quality and exceptional service</p>
                </div>

                <div className="flex flex-wrap -m-4 text-center">
                    {products.map((product, index) => (
                        <div key={index} className='p-4 md:w-1/3 w-full'>
                            <div className="group relative h-full backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 hover:border-cyan-400/60 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 px-6 py-8 rounded-2xl transition-all duration-300">
                                
                                {/* Gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300 pointer-events-none'></div>
                                
                                {/* Content */}
                                <div className='relative z-10'>
                                    <img 
                                        className='text-cyan-500 w-14 h-14 mb-4 inline-block drop-shadow-lg group-hover:scale-110 transition-transform duration-300' 
                                        src={Svg} 
                                        alt={product.title}
                                    />
                                    <h2 className='title-font font-bold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300'>{product.title}</h2>
                                    <p className='leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>{product.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Track