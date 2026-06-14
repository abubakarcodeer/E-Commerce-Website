import React from 'react'

const customers = [
    { name: "Aiden Carter", passion: "sustainable fashion design"  ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ7nKCoJb4ljaQ6BZ17Z3VVAjZb4Ek0qvfg&s'},
    { name: "Lila Morgan", passion: "digital art and motion graphics", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWltO_RzTpY_bKJ5glRBmGHEPbuUj3YnrVQ&s' },
    { name: "Ethan Brooks", passion: "AI-powered web development", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXYyNsi4FZTd0OVI4bvyklIN4LWWTED4gxw&s' },
];

const Testimonial = () => {
    return (
        <div className='py-16 md:py-20'>
            <section className='text-gray-600 body-font dark:text-gray-400 mb-10'>
                <div className="container px-5 mx-auto">
                    <div className='text-center mb-14'>
                        <h1 className='text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3'>Customer Reviews</h1>
                        <h2 className='text-lg text-gray-400'>What our <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold'>amazing customers</span> are saying</h2>
                    </div>

                    <div className='flex flex-wrap -m-4'>
                        {
                            customers.map((item, index) => (
                                <div key={index} className={`lg:w-1/3 lg:mb-0 p-4 ${index === 2 ? '':"mb-6"}` }>
                                    <div className="h-full text-center group relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 hover:border-cyan-400/60 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300">
                                        
                                        {/* Gradient overlay */}
                                        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300 pointer-events-none'></div>
                                        
                                        {/* Content */}
                                        <div className='relative z-10'>
                                            <img 
                                                className='w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:scale-110 transition-all duration-300
                                                ' 
                                                src={item.image} 
                                                alt={item.name}
                                            
                                            />
                                            <p className='leading-relaxed text-gray-300 group-hover:text-gray-200 transition-colors duration-300 text-sm italic'>⭐⭐⭐⭐⭐ "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quibusdam quod sequi velit dolorem ad fugit in maxime a eos consectetur fuga autem, aliquam quasi eaque, ab doloremque sint ut!"</p>
                                            <div className='h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mt-6 mb-4 inline-block shadow-lg shadow-cyan-500/50' />
                                            <h2 className='text-white font-bold title-font tracking-wider text-sm uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300'>{item.name}</h2>
                                            <p className='text-gray-400 text-xs mt-1 group-hover:text-cyan-400 transition-colors duration-300'>✨ {item.passion}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial