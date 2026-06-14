import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/MyContext'

const UserDashboard = () => {
    const { loading, getAllOrder } = useContext(myContext)

    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8 lg:py-12">
                <div className="top mb-8">
                    <div className="relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 py-8">
                        {/* Gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>
                        
                        <div className="relative z-10 flex justify-center mb-6">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="user" className='w-24 h-24 rounded-full border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-300' />
                        </div>
                        <div className="space-y-3">
                            <h1 className='text-center text-xl text-white font-bold'><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Name:</span> <span className='text-gray-200'>{user?.name}</span></h1>
                            <h1 className="text-center text-lg text-gray-300"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Email:</span> <span className='text-gray-200'>{user?.email}</span></h1>
                            <h1 className="text-center text-lg text-gray-300"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Date:</span> <span className='text-gray-200'>{user?.date}</span></h1>
                            <h1 className="text-center text-lg text-gray-300"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Role:</span> <span className='px-3 py-1 inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-bold'>{user?.role}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="mx-auto my-6 max-w-6xl px-2 md:my-8 md:px-0">
                        <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">📦 Your Orders</h2>

                        {getAllOrder.filter(obj => obj.userid === user?.uid).map((order, index) => (
                            <div key={index}>
                                {
                                    order.cartItems.map((item, index) => {
                                        const { id, title, quantity, price, date, productImageUrl, category } = item
                                        const { status } = order

                                        return (
                                            <div key={index} className="mt-6 flex flex-col overflow-hidden rounded-2xl border border-purple-500/30 md:flex-row backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
                                                <div className="w-full border-r border-purple-500/30 bg-gradient-to-br from-slate-800/70 to-slate-900/70 md:max-w-xs">
                                                    <div className="p-8">
                                                        <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-4 md:grid-cols-1">
                                                            <div className="mb-4">
                                                                <div className="text-sm font-bold text-cyan-400">Order Id</div>
                                                                <div className="text-sm overflow-scroll overflow-ellipsis hide-scroll-bar font-medium text-gray-400">
                                                                    #{id}
                                                                </div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-bold text-cyan-400">Date</div>
                                                                <div className="text-sm font-medium text-gray-400">{date}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-bold text-cyan-400">Amount</div>
                                                                <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Rs.{price * quantity}</div>
                                                            </div>
                                                            <div className="mb-4">
                                                                <div className="text-sm font-bold text-cyan-400">Status</div>
                                                                <div className='inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-xs font-bold'>{status}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="p-8">
                                                        <ul className="-my-7 divide-slate-700">
                                                            <li className='flex flex-col justify-between space-x-5 py-7 md:flex-row'>
                                                                <div className="flex flex-1 items-stretch">
                                                                    <div className="flex-shrink-0">
                                                                        <img src={productImageUrl} alt={title} className='h-20 w-20 rounded-lg border border-purple-500/30 object-cover shadow-lg' />
                                                                    </div>
                                                                    <div className="ml-5 flex flex-col justify-between">
                                                                        <div className="flex-1">
                                                                            <p className='text-sm font-bold text-white'>{title}</p>
                                                                            <p className='mt-1.5 text-sm font-medium text-gray-400'>{category}</p>
                                                                        </div>
                                                                        <p className='mt-4 text-sm font-medium text-cyan-400'>x {quantity}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                                    <p className='text-right text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Rs.{price}</p>
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