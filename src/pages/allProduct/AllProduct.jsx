import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import myContext from '../../context/myContext'
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

const AllProduct = () => {
  const navigate = useNavigate()
  const { loading, getAllProduct } = useContext(myContext)
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
      <div className='py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen'>
        <div>
          <h1 className='text-center mb-8 text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>🛍️ All Products</h1>
        </div>

        <section className='text-gray-300 body-font'>
          <div className='container px-5 py-8 mx-auto'>
            {loading && <Loader />}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {
                getAllProduct.map((item, index) => {
                  const { productImageUrl, id, title, price } = item
                  return (
                    <div key={index} className='group'>
                      <div className='h-full relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105'>
                        <div className='relative overflow-hidden h-72 bg-slate-700/50'>
                          <img onClick={() => navigate(`/productinfos/${id}`)} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer' src={productImageUrl} alt="img" />
                        </div>
                        <div className='p-6'>
                          <h2 className='tracking-widest text-xs title-font font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2'>
                            E-Pak
                          </h2>
                          <h1 className='title-font text-lg font-bold text-white mb-3 line-clamp-2'>
                            {title}
                          </h1>
                          <h1 className='title-font text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4'>
                            Rs{price}
                          </h1>

                          <div className='flex justify-center gap-2'>
                            {cartItems.some(p => p.id === item.id)
                              ?
                              <button onClick={() => deleteCart(item)} className='w-full bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 active:scale-95 text-white py-2 px-4 rounded-lg font-bold transition-all duration-300'>
                                🗑️ Delete
                              </button>
                              :
                              <button onClick={() => addCart(item)} className='w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 active:scale-95 text-white py-2 px-4 rounded-lg font-bold transition-all duration-300'>
                                ➕ Add to Cart
                              </button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AllProduct