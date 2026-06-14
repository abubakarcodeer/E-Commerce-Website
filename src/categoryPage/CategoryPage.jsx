import React, { useContext, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import myContext from '../context/myContext'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

const CategoryPage = () => {

    const { categoryname } = useParams()
    const { loading, getAllProduct } = useContext(myContext)

    const navigate = useNavigate()

    const filterProducts = getAllProduct.filter(obj => obj.category.includes(categoryname))

    const cartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addCart = (item) => {
        dispatch(addToCart(item))
        toast.success("Add to cart")
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
        toast.success("Delete cart")
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])


    return (
        <Layout>
            <div className="mt-10">
                <div className="">
                    <h1 className='text-center mb-5 text-2xl font-semibold dark:text-gray-500 first-letter:uppercase'>{categoryname}</h1>
                </div>
                {loading ? <>
                    <Loader />
                </> :
                    <section className='text-gray-600 body-font'>
                        <div className='container px-5 py-5 mx-auto'>
                            {loading && <Loader />}
                            <div className={`flex flex-wrap -m-4 ${filterProducts.length > 0 ? '' : 'justify-center'} `}>
                                {filterProducts.length > 0 ?
                                    <>
                                        {filterProducts.map((item, index) => {
                                            const { productImageUrl, id, title, price } = item
                                            return (
                                                <div key={index} className='p-4 w-full md:w-1/4'>
                                                    <div className='h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer'>
                                                        <img onClick={() => navigate(`/productinfos/${id}`)} className='lg:h-80 h-96 w-full' src={productImageUrl} alt="img" />
                                                        <div className='p-6'>
                                                            <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                                                                E-Pak
                                                            </h2>
                                                            <h1 className='title-font text-lg font-medium text-gray-900 dark:text-gray-300 mb-3'>
                                                                {title.substring(0, 25)}
                                                            </h1>
                                                            <h1 className='title-font text-lg font-medium text-gray-900 dark:text-gray-300 mb-3'>
                                                                Rs.{price}
                                                            </h1>

                                                            <div className='flex justify-center'>
                                                                {cartItems.some(p => p.id === item.id)
                                                                    ?
                                                                    <button onClick={() => deleteCart(item)} className='bg-pink-700
                                                    hover:bg-pink-600 w-full text-white py-[4px]
                                                    rounded-lg font-bold'>
                                                                        Delete from Cart
                                                                    </button>
                                                                    :
                                                                    <button onClick={() => addCart(item)} className='bg-green-500
                                                    hover:bg-green-600 w-full text-white py-[4px]
                                                    rounded-lg font-bold'>
                                                                        Add To Cart
                                                                    </button>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </> :
                                    <div>
                                        <div className="flex justify-center">
                                            <img src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" className='mb-2' alt="" />
                                        </div>
                                        <h1 className='text-black text-2xl'>No {categoryname} Product found</h1>
                                    </div>

                                }
                            </div>
                        </div>
                    </section>
                }

            </div>
        </Layout>
    )
}

export default CategoryPage