
import { useContext } from 'react'
import myContext from '../../context/MyContext'
import Loader from '../Loader'

const OrderDetails = () => {

    const { getAllOrder, orderDelete } = useContext(myContext)

    return (
        <div>
            <div className="py-5">
                <h1 className='text-xl text-green-300 font-bold'>All Orders</h1>
            </div>
            <div className='w-full overflow-x-auto'>
                <table className='w-full text-left border border-collapse sm:border-separate border-green-200 text-green-400'>
                    <tbody>
                        <tr>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>S.No.</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Image</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Id</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Title</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Category</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Price</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Quantity</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Total Price</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Status</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Name</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Address</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Pincode</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Phone Number</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Email</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Date</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Action</th>
                        </tr>
                        {getAllOrder.map((order, index) => {

                            return (
                                <>
                                    {order.cartItems.map((item, count) => {
                                        const { id, title, productImageUrl, category, price, quantity } = item
                                        const { status, address, email } = order
                                        const allSameEmail = true;

                                        return (
                                            <tr key={count} className='text-green-300'>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{allSameEmail ? (count === 0 ? `${index + 1}.` : "") : `${index + 1}.`}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>
                                                    <div className="flex justify-center">
                                                        <img src={productImageUrl} alt={title} className='w-20' />
                                                    </div>
                                                </td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{id}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{title}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{category}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{price}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{quantity}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{quantity * price}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{status}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{address.name}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{address.address}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{address.pincode}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{address.mobileNumber}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{email}</td>
                                                <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{address.date}</td>
                                                {allSameEmail ? (count === 0 ?
                                                    <td onClick={() => orderDelete(order.id)} className='h-12 px-6 cursor-pointer text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-red-500'>Delete</td>
                                                    : "") : <td td onClick={() => orderDelete(order.id)} className='h-12 cursor-pointer px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-red-500'>Delete</td>

                                                }
                                            </tr >
                                        )
                                    })}
                                </>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default OrderDetails