import React from 'react'

const customers = [
    { name: "Aiden Carter", passion: "sustainable fashion design"  ,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ7nKCoJb4ljaQ6BZ17Z3VVAjZb4Ek0qvfg&s'},
    { name: "Lila Morgan", passion: "digital art and motion graphics", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWltO_RzTpY_bKJ5glRBmGHEPbuUj3YnrVQ&s' },
    { name: "Ethan Brooks", passion: "AI-powered web development", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXYyNsi4FZTd0OVI4bvyklIN4LWWTED4gxw&s' },
];

const Testimonial = () => {
    return (
        <div>
            <section className='text-gray-600 body-font dark:text-gray-400 mb-10'>
                <div className="container px-5 py-10 mx-auto">
                    <h1 className='text-center text-2xl font-bold dark:text-gray-300 text-black'>Testimonial</h1>
                    <h2 className='text-center text-2xl font-semibold mb-10'>What our <span className='text-green-500'>customers </span>are saying</h2>

                    <div className='flex flex-wrap -m-4'>


                        {
                            customers.map((item, index) => (
                                <div key={index} className={`lg:w-1/3 lg:mb-0 p-4 ${index === 2 ? '':"mb-6"}` }>
                                    <div className="h-full text-center">
                                        <img className='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2
                                        border-gray-200 bg-gray-100' src={item.image} alt="" />
                                        <p className='leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quibusdam quod sequi velit dolorem ad fugit in maxime a eos consectetur fuga autem, aliquam quasi eaque, ab doloremque sint ut!</p>
                                        <span className='inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4' />
                                        <h2 className='text-gray-900 font-medium title-font
                                    tracking-wider text-sm uppercase dark:text-gray-300'>{item.name}</h2>
                                        <p className='text-gray-500 '>{item.passion}</p>
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