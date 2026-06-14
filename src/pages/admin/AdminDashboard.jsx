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
        <div>
            <div className="top mb-5 px-5 mt-5">
                <div className="bg-green-200 py-5 border border-green-100 rounded-lg">
                    <h1 className="text-center text-2xl font-bold text-green-500">
                        Admin Dashboard
                    </h1>
                </div>
            </div>
            <div className="px-5">
                <div className="mid mb-5">
                    <div className="bg-green-200 py-5 rounded-xl border border-green-100">
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        <div className="">
                            <h1 className="text-center text-lg text-green-500"><span className='font-black'>Name :</span> {admin?.name}</h1>
                            <h1 className="text-center text-lg text-green-500"><span className='font-bold '>Email :</span> {admin?.email}</h1>
                            <h1 className="text-center text-lg text-green-500"><span className='font-bold '>Date :</span> {admin?.date}</h1>
                            <h1 className="text-center text-lg text-green-500"><span className='font-bold '>Role :</span> {admin?.role}</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Tabs>
                        <TabList className="flex flex-wrap -m-4 text-center justify-center">
                            <Tab className="p-4 md:w-1/3 sm:h-1/2 w-full cursor-pointer">
                                <div className="border bg-green-200 hover:bg-green-100 border-green-100 px-4 py-3 rounded-xl">
                                    <div className="text-green-500 w-12 h-12 mb-3 inline-block">
                                        <BiBasket size={50} />
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-green-400">{getAllProduct.length}</h2>
                                    <p className='text-green-500 font-bold'>Total Products</p>
                                </div>
                            </Tab>
                            <Tab className="p-4 md:w-1/3 sm:h-1/2 w-full cursor-pointer">
                                <div className="border bg-green-200 hover:bg-green-100 border-green-100 px-4 py-3 rounded-xl">
                                    <div className="text-green-500 w-12 h-12 mb-3 inline-block">
                                        <GrOrderedList size={50} />
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-green-400">{getAllOrder.length}</h2>
                                    <p className='text-green-500 font-bold'>Total Orders</p>
                                </div>
                            </Tab>
                            <Tab className="p-4 md:w-1/3 sm:h-1/2 w-full cursor-pointer">
                                <div className="border bg-green-200 hover:bg-green-100 border-green-100 px-4 py-3 rounded-xl">
                                    <div className="text-green-500 w-12 h-12 mb-3 inline-block">
                                        <BiUser size={50} />
                                    </div>
                                    <h2 className="title-font font-medium text-3xl text-green-400">{getAllUsers.length}</h2>
                                    <p className='text-green-500 font-bold'>Total User</p>
                                </div>
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <ProductDetails />
                        </TabPanel>
                        <TabPanel>
                            <OrderDetails />
                        </TabPanel>
                        <TabPanel>
                            <UsersDetails />
                        </TabPanel>

                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard