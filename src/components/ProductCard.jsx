import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    
    const { productImageUrl, id, title, price } = item
    const isInCart = cartItems.some(p => p.id === item.id)

    const addCart = useCallback(() => {
        dispatch(addToCart(item))
        toast.success("Add to cart")
    }, [dispatch, item])

    const deleteCart = useCallback(() => {
        dispatch(deleteFromCart(item))
        toast.success("Delete cart")
    }, [dispatch, item])

    return (
        <div className='p-4 w-full md:w-1/4'>
            <div className='h-full group relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer hover:border-purple-400/60'>
                {/* Futuristic glow effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none'></div>
                
                {/* Image container */}
                <div className='relative overflow-hidden h-64 md:h-72'>
                    <img 
                        onClick={() => navigate(`/productinfos/${id}`)} 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer' 
                        src={productImageUrl} 
                        alt={title}
                        loading="lazy"
                    />
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300'></div>
                </div>

                {/* Content */}
                <div className='p-5 relative z-10'>
                    <h2 className='text-xs tracking-widest font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 uppercase'>
                        E-Pak Premium
                    </h2>
                    <h1 onClick={() => navigate(`/productinfos/${id}`)} className='title-font text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300 cursor-pointer'>
                        {title.substring(0, 30)}
                    </h1>
                    
                    <div className='flex items-center justify-between mb-4'>
                        <span className='text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                            Rs.{price}
                        </span>
                        <span className='text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 font-semibold'>In Stock</span>
                    </div>

                    <div className='flex justify-center gap-2'>
                        {isInCart
                            ?
                            <button 
                                onClick={deleteCart} 
                                className='flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-500/50'
                            >
                                Remove
                            </button>
                            :
                            <button 
                                onClick={addCart} 
                                className='flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white py-2.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-cyan-500/50'
                            >
                                Add to Cart
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductCard)
