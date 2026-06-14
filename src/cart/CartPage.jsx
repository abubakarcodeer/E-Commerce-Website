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
            <div className='container mx-auto px-4 max-w-7xl lg:px-0'>
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl" >
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-600 sm:text-4xl'>
                        Shopping Cart
                    </h1>
                    <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
                        <section aria-labelledby='cart-heading' className='rounded-lg bg-white lg:col-span-8'>
                            <h2 id='cart-heading' className='sr-only'>
                                Item in your shopping cart
                            </h2>
                            <ul role='list' className='divide-y p-2 divide-gray-200'>
                                {
                                    cartItems.length > 0
                                        ?
                                        <>
                                            {cartItems.map((item) => (
                                                <div key={item.id} className=''>
                                                    <li className='flex py-6 sm:py-6'>
                                                        <div className='flex-shrink-0'>
                                                            <img className='sm:h-38 sm:w-38 h-24 w-24
                                            rounded-md object-contain object-center' src={item.productImageUrl} alt={item.name} />
                                                        </div>

                                                        <div className='ml-4 flex flex-1 flex-col
                                        justify-between sm:ml-6'>
                                                            <div className=" pr-9 sm:grid
                                            sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                                <div>
                                                                    <div className="flex justify-between">

                                                                        <h3 className='text-sm font-semibold text-black'>
                                                                            {item.title}
                                                                        </h3>

                                                                    </div>
                                                                    <div className="mt-1 flex text-sm">
                                                                        <p className='text-sm text-gray-500'>
                                                                            {item.category}
                                                                        </p>
                                                                    </div>
                                                                    <div className="ml-1 flex items-end ">
                                                                        <p className='text-xs font-medium text-gray-500'>
                                                                            Rs.{item.price}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <div className="mb-2 flex">
                                                        <div className="min-w-24 flex">
                                                            <button onClick={() => handleDecrement(item.id)} type='button' className='h-7 cursor-pointer w-7'>
                                                                -
                                                            </button>
                                                            <input type="text" className='mx-1 h-7 w-9
                                                                rounded-md border text-center' value={item.quantity} />
                                                            <button onClick={() => handleIncrement(item.id)} type='button' className='h-7 cursor-pointer w-7'>
                                                                +
                                                            </button>
                                                        </div>
                                                        <div className='ml-6 flex text-sm'>
                                                            <button onClick={() => deleteCart(item)} type='button' className='flex items-center cursor-pointer space-x-1 px-2 py-1 pl-0'>
                                                                <BiTrash size={12} className='text-red-500' />
                                                                <span className='text-xs font-medium text-red-500'>
                                                                    Remove
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                        :
                                        <>
                                            Not Found
                                        </>
                                }
                            </ul>
                        </section>

                        <section
                            aria-labelledby='summary-heading'
                            className='mt-6 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0'>
                            <h2
                                id='summary-heading'
                                className='border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4'>
                                Price Details
                            </h2>
                            <div>
                                <dl className='space-y-1 px-2 py-4'>
                                    <div className="flex items-center justify-between">
                                        <dt className='text-sm text-gray-800'>Price ({cartItemTotal})</dt>
                                        <dd className=' text-sm font-medium text-gray-900'>Rs.{cartTotal}</dd>
                                    </div>
                                    <div className="flex items-center justify-between py-4">
                                        <dt className='flex text-sm text-gray-800'>
                                            <span>Delivery Charges</span>
                                        </dt>
                                        <dd className='text-sm font-medium text-gray-700'>Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4">
                                        <dt className='text-base font-medium text-gray-900'>
                                            Total Amount
                                        </dt>
                                        <dd className='text-base font-medium text-gray-900'>Rs.{cartTotal}</dd>
                                    </div>
                                </dl>
                                <div className="px-2 pb-4 font-medium text-green-700">
                                    <div className="flex gap-4 mb-6">
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

                        </section>

                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage