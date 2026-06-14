import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/MyContext'

const UserDashboard = () => {
    const { loading, getAllOrder } = useContext(myContext)

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <Layout>
            <div className="container mx-auto px-4 py-5  lg:py-8">
                <div className="top">
                    <div className="bg-green-200 rounded-xl border border-green-100">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-center text-lg'><span className='font-bold'>Name :</span> {user?.name}</h1>
                            <h1 className="text-center text-lg"><span className='font-bold'>Email :</span> {user?.email}</h1>
                            <h1 className="text-center text-lg"><span className='font-bold'>Date :</span> {user?.date}</h1>
                            <h1 className="text-center text-lg"><span className='font-bold'>Role :</span> {user?.role}</h1>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0 ">
                        <h2 className="text-2xl lg:text-3xl font-bold">Order Details</h2>

                        {getAllOrder.filter(obj => obj.userid === user?.uid).map((order, index) => (
                            <div key={index}>
                                {
                                    order.cartItems.map((item, index) => {
                                        const { id, title, quantity, price, date, productImageUrl, category } = item
                                        const { status } = order

                                        return (
                                            <div key={index} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-green-100 md:flex-row">
                                                <div className="w-full border-r border-green-100 bg-green-200 md:max-w-xs">
                                                    <div className="p-8">
                                                        <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-4 md:grid-cols-1">
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-black">Order Id</div>
                                                                <div className="text-sm overflow-scroll overflow-ellipsis hide-scroll-bar font-medium text-gray-500">
                                                                    #{id}
                                                                </div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-black">Date</div>
                                                                <div className="text-sm font-medium text-gray-500">{date}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-black">Total Amount</div>
                                                                <div className="text-sm font-medium text-gray-500">Rs.{price * quantity}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-semibold text-black">Order Status</div>
                                                                <div className="text-sm font-medium text-gray-500">{status}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="p-8">
                                                        <ul className="-my-7 divide-gray-200">
                                                            <li
                                                                className='flex flex-col justify-between space-x-5 py-7 md:flex-row'>
                                                                <div className="flex flex-1 items-stretch">
                                                                    <div className="flex-shrink-0">
                                                                        <img src={productImageUrl} alt={title} className='h-20 w-20 rounded-lg border border-gray-200 object-cover' />
                                                                    </div>
                                                                    <div className="ml-5 flex flex-col justify-between">
                                                                        <div className="flex-1">
                                                                            <p className='text-sm font-bold dark:text-black text-gray-900'>{title}</p>
                                                                            <p className='mt-1.5 text-sm font-medium text-gray-500'>{category}</p>
                                                                        </div>
                                                                        <p className='mt-4 text-sm font-medium text-gray-500'>x {quantity}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-auto flex flex-col items-end justify-between" >
                                                                    <p className='text-right text-sm font-bold dark:text-gray-50 text-gray-900'>Rs.{price}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserDashboard