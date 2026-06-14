import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { BiTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity,clearCart, deleteFromCart, incrementQuantity } from '../redux/cartSlice'
import { toast } from 'react-toastify'
import BuyNow from '../components/buyNow/BuyNow'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../firebase/FirebaseConfig'
import { Navigate, useNavigate } from 'react-router-dom'



const CartPage = () => {

    const navigate = useNavigate()

    const cartItems = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
        toast.success("Delete cart")
    }

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id))
    }
    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id))
    }

    const cartItemTotal = cartItems.map(item => item.quantity).reduce((preValue, currValue) => preValue + currValue, 0)
    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((preValue, currValue) => preValue + currValue, 0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const user = JSON.parse(localStorage.getItem('user'))

    const [address, setAddress] = useState({
        name: '',
        address: '',
        pincode: '',
        mobileNumber: '',
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            'en-US',
            {
                month: 'short',
                day: '2-digit'
                , year: 'numeric'
            }
        )
    })

    const buyNowFunction = () => {
        if (address.name === '' || address.address === '' || address.pincode === '' || address.mobileNumber === '') {
            return toast.error("All fields must be filled")
        }

        const orderInfo = {
            cartItems,
            address,
            email: user.email,
            userid: user.uid,
            status: "confirmed",
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                'en-US',
                {
                    month: 'short',
                    day: '2-digit'
                    , year: 'numeric'
                }
            )
        }

        try {

            const orderRef = collection(db, 'order')
            addDoc(orderRef, orderInfo)
            setAddress({
                name: '',
                address: '',
                pincode: '',
                mobileNumber: ''
            })
            localStorage.removeItem('cart');
            dispatch(clearCart());
            toast.success("Order Placed Sucessfull")
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Layout>
            <div className='container mx-auto px-4 max-w-7xl lg:px-0 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen'>
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className='text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8'>
                        🛒 Shopping Cart
                    </h1>
                    <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
                        <section aria-labelledby='cart-heading' className='rounded-2xl lg:col-span-8'>
                            <h2 id='cart-heading' className='sr-only'>
                                Items in your shopping cart
                            </h2>
                            <div role='list' className='space-y-4'>
                                {
                                    cartItems.length > 0
                                        ?
                                        <>
                                            {cartItems.map((item) => (
                                                <div key={item.id}>
                                                    <div className='relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 hover:border-cyan-400/60 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300'>
                                                        <li className='flex py-4 gap-6'>
                                                            <div className='flex-shrink-0'>
                                                                <img className='h-32 w-32 rounded-xl object-contain object-center border border-purple-500/30' src={item.productImageUrl} alt={item.name} />
                                                            </div>

                                                            <div className='flex-1 flex flex-col justify-between'>
                                                                <div>
                                                                    <div className="flex justify-between mb-2">
                                                                        <h3 className='text-lg font-bold text-white'>
                                                                            {item.title}
                                                                        </h3>
                                                                    </div>
                                                                    <div className="flex text-sm mb-2">
                                                                        <p className='text-sm text-gray-400'>
                                                                            {item.category}
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex items-end">
                                                                        <p className='text-lg font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                                                                            Rs.{item.price}
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="flex items-center gap-6">
                                                                    <div className="flex items-center gap-2 bg-slate-700/50 border border-purple-500/30 rounded-xl px-3 py-2">
                                                                        <button onClick={() => handleDecrement(item.id)} type='button' className='text-cyan-400 hover:text-cyan-300 font-bold text-lg'>
                                                                            −
                                                                        </button>
                                                                        <input type="text" className='w-12 bg-transparent text-center text-white font-bold outline-none' value={item.quantity} readOnly />
                                                                        <button onClick={() => handleIncrement(item.id)} type='button' className='text-cyan-400 hover:text-cyan-300 font-bold text-lg'>
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                    <button onClick={() => deleteCart(item)} type='button' className='flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 rounded-lg transition-all duration-300'>
                                                                        <BiTrash size={16} className='text-white' />
                                                                        <span className='text-sm font-bold text-white'>
                                                                            Remove
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                        :
                                        <div className='relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-8 rounded-2xl text-center'>
                                            <p className='text-gray-300 text-lg'>🛒 Your cart is empty</p>
                                        </div>
                                }
                            </div>
                        </section>

                        <section
                            aria-labelledby='summary-heading'
                            className='mt-8 lg:col-span-4 lg:mt-0'>
                            <div className='relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl shadow-lg overflow-hidden'>
                                {/* Gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10'></div>
                                
                                <h2
                                    id='summary-heading'
                                    className='relative z-10 border-b border-purple-500/30 px-6 py-4 text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                                    💳 Price Details
                                </h2>
                                <div className='relative z-10'>
                                    <dl className='space-y-4 px-6 py-6'>
                                        <div className="flex items-center justify-between">
                                            <dt className='text-sm text-gray-300'>Price ({cartItemTotal} items)</dt>
                                            <dd className='text-lg font-bold text-cyan-400'>Rs.{cartTotal}</dd>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <dt className='flex text-sm text-gray-300'>
                                                <span>Delivery Charges</span>
                                            </dt>
                                            <dd className='text-lg font-bold text-green-400'>Free 🚚</dd>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-dashed border-purple-500/30 pt-4">
                                            <dt className='text-base font-bold text-white'>
                                                Total Amount
                                            </dt>
                                            <dd className='text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>Rs.{cartTotal}</dd>
                                        </div>
                                    </dl>
                                    <div className="px-6 pb-6">
                                        <div className="flex gap-4">
                                            {user
                                                ?
                                                <BuyNow
                                                    address={address}
                                                    setAddress={setAddress}
                                                    buyNowFunction={buyNowFunction} />
                                                :
                                                <Navigate to={'/login'} />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage