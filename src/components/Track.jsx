import React from 'react'
import Svg from '../assets/shopping-bag-.svg'

const products = [
    { title: "Premium Tshirts", desc: "Our T-Shirts are 100% made of cotton" },
    { title: "Casual Tshirts", desc: "Perfect for everyday wear" },
    { title: "Sport Tshirts", desc: "Breathable and comfortable" },
];

const Track = () => {
    return (
        <section>
            <div className='container mx-auto px-5 py-10 md:py-14'>

                <div className="flex flex-wrap -m-4 text-center">
                    {products.map((product, index) => (
                        <div key={index} className='p-4 md:w-1/3 w-full'>
                            <div className="border-2 hover:shadow-lg hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg">
                                <img className='text-green-600 w-12 h-12 mb-3 inline-block' src={Svg} alt="" />
                                <h2 className='title-font font-medium text-lg text-gray-900'>{product.title}</h2>
                                <p className='leading-relaxed'>{product.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Track