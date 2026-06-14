import React, { useContext, useMemo } from 'react'
import myContext from '../context/myContext'
import Loader from './Loader'
import ProductCard from './ProductCard'

const HomePageProducts = () => {

    const { loading, getAllProduct } = useContext(myContext)

    // Memoize sliced products to avoid unnecessary calculations
    const displayProducts = useMemo(() => getAllProduct.slice(0, 8), [getAllProduct])

    return (
        <div className='mt-16 mb-10'>
            <div className='relative mb-12'>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10'></div>
                <h1 className='text-center text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg'>
                    ⚡ Bestselling Products
                </h1>
                <p className='text-center text-gray-400 mt-2 text-sm md:text-base'>Discover our premium collection</p>
            </div>

            <section className='text-gray-600 body-font'>
                <div className='container px-5 py-5 mx-auto'>
                    {loading && <Loader />}
                    <div className='flex flex-wrap -m-4'>
                        {
                            displayProducts.map((item) => (
                                <ProductCard key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default React.memo(HomePageProducts)