import React, { useContext } from 'react'
import { BiBasket, BiUser } from 'react-icons/bi'
import { GrOrderedList } from 'react-icons/gr'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import ProductDetails from '../../components/admin/ProductDetails'
import OrderDetails from '../../components/admin/OrderDetails'
import UsersDetails from '../../components/admin/UsersDetails'
import myContext from '../../context/myContext'

const AdminDashboard = () => {

    const admin = JSON.parse(localStorage.getItem('user'))
    const { getAllProduct, getAllOrder,getAllUsers } = useContext(myContext)
    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen'>
            <div className="top mb-8 px-5 mt-8">
                <div className="relative backdrop-blur-sm bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-purple-500/30 py-8 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>
                    <h1 className="relative z-10 text-center text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        ⚙️ Admin Dashboard
                    </h1>
                </div>
            </div>
            <div className="px-5">
                <div className="mid mb-8">
                    <div className="relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 py-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden">
                        {/* Gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>
                        
                        <div className="relative z-10 flex justify-center mb-6">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="admin" className='w-24 h-24 rounded-full border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform duration-300' />
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-center text-xl text-white font-bold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Name:</span> <span className='text-gray-200'>{admin?.name}</span></h1>
                            <h1 className="text-center text-lg text-gray-300"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Email:</span> <span className='text-gray-200'>{admin?.email}</span></h1>
                            <h1 className="text-center text-lg text-gray-300"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Date:</span> <span className='text-gray-200'>{admin?.date}</span></h1>
                            <h1 className="text-center text-lg text-gray-300"><span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'>Role:</span> <span className='px-3 py-1 inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-300 text-sm font-bold'>{admin?.role}</span></h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap -m-4 text-center justify-center gap-4">
                            <Tab className="p-4 w-full md:w-1/3 cursor-pointer outline-none">
                                <div className="relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 hover:border-cyan-400/60 px-6 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                                    {/* Gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl'></div>
                                    <div className="relative z-10 text-cyan-400 w-14 h-14 mb-4 mx-auto drop-shadow-lg">
                                        <BiBasket size={50} />
                                    </div>
                                    <h2 className="title-font font-black text-4xl bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">{getAllProduct.length}</h2>
                                    <p className='text-cyan-300/80 font-bold text-sm mt-2'>Total Products</p>
                                </div>
                            </Tab>
                            <Tab className="p-4 w-full md:w-1/3 cursor-pointer outline-none">
                                <div className="relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-400/30 hover:border-purple-400/60 px-6 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                                    {/* Gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl'></div>
                                    <div className="relative z-10 text-purple-400 w-14 h-14 mb-4 mx-auto drop-shadow-lg">
                                        <GrOrderedList size={50} />
                                    </div>
                                    <h2 className="title-font font-black text-4xl bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">{getAllOrder.length}</h2>
                                    <p className='text-purple-300/80 font-bold text-sm mt-2'>Total Orders</p>
                                </div>
                            </Tab>
                            <Tab className="p-4 w-full md:w-1/3 cursor-pointer outline-none">
                                <div className="relative backdrop-blur-sm bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-pink-400/30 hover:border-pink-400/60 px-6 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105">
                                    {/* Gradient overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-2xl'></div>
                                    <div className="relative z-10 text-pink-400 w-14 h-14 mb-4 mx-auto drop-shadow-lg">
                                        <BiUser size={50} />
                                    </div>
                                    <h2 className="title-font font-black text-4xl bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent">{getAllUsers.length}</h2>
                                    <p className='text-pink-300/80 font-bold text-sm mt-2'>Total Users</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel className="mt-8">
                            <ProductDetails />
                        </TabPanel>
                        <TabPanel className="mt-8">
                            <OrderDetails />
                        </TabPanel>
                        <TabPanel className="mt-8">
                            <UsersDetails />
                        </TabPanel>

                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard