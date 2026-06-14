import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import myContext from '../../context/MyContext';
import Loader from '../Loader';
import { toast } from 'react-toastify';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/FirebaseConfig';

const ProductDetails = () => {

    const { loading, setLoading, getAllProductFunction, getAllProduct } = useContext(myContext)
    const navigate = useNavigate()

    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(db, 'products', id))
            toast.success("Product Deleted successfully")
            getAllProductFunction()

        } catch (error) {
            console.log(error)
            toast.error(error.code.split('/')[1].split('-').join(" "));
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-xl text-green-300 font-bold">All Products</h1>
                <Link to={'/addproduct'} ><button className='px-5 py-2 bg-green-50 border border-green-100 rounded-lg'>Add Products</button></Link>
            </div>

            <div className="w-full overflow-x-auto">
                <div className='relative top-10'>
                    {loading && <Loader />}
                </div>
                <table className='w-full text-left border border-collapse sm:border-separate border-green-200 text-green-400'>
                    <tbody>
                        <tr>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>S.No.</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Image</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Title</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Price</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Category</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Quantity</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Date</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Action</th>
                            <th scope='col' className='h-12 px-6 text-md border-l
                            first:border-l-0 border-green-100 text-slate-700 fill-slate-100 font-bold fontPara'>Action</th>
                        </tr>

                        {
                            getAllProduct.map((item, index) => {
                                const { id, title, price, category, quantity, date, productImageUrl } = item
                                return (
                                    <tr key={id} className='text-green-300' >
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{index + 1}.</td>
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>
                                            <div className="flex justify-center">
                                                <img src={productImageUrl} alt={title} className='w-20' />
                                            </div>
                                        </td>
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{title}</td>
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>Rs.{price}</td>
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 capitalize'>{category}</td>
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500 capitalize'>{quantity}</td>
                                        <td className='h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-slate-500'>{date}</td>
                                        <td onClick={() => navigate(`/updateproduct/${id}`)} className='h-12 cursor-pointer px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-green-500'>Edit</td>
                                        <td onClick={() => deleteProduct(id)} className='h-12 cursor-pointer px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-green-100 stroke-slate-500 text-red-500'>Delete</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default ProductDetails