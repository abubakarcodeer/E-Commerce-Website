import React, { useContext, useState } from 'react'
import myContext from '../../context/MyContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../firebase/FirebaseConfig'
import Loader from '../../components/Loader'


const categoryList = [
  {
    name: 'fashion'
  },
  {
    name: 'shirt'
  },
  {
    name: 'jacket'
  },
  {
    name: 'mobile'
  },
  {
    name: 'laptop'
  },
  {
    name: 'shoes'
  },
  {
    name: 'home'
  },
  {
    name: 'books'
  },
]

const AddProductPage = () => {

  const { loading, setLoading } = useContext(myContext)
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    title: '',
    price: '',
    productImageUrl: '',
    category: '',
    description: '',
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      'en-US',
      {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }
    )
  })

  const addProductFunction = async () => {
    console.log(product)
    if (product.title === '' || product.description === '' || product.price === '' || product.productImageUrl === '' || product.category === '') {
      return toast.error('All fields are requird')
    }

    setLoading(true)

    try {
      const productRef = collection(db,'products');
      await addDoc(productRef, product)
      toast.success('Add product successfully')
      navigate('/admindashboard')

    } catch (error) {
      console.log(error)
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none -z-10'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
      </div>

      {loading && <Loader/>}
      <div className="login_form min-w-[350px] max-w-2xl w-full bg-transparent backdrop-blur-md px-8 lg:px-12 py-10 border border-purple-500/30 rounded-2xl shadow-2xl mx-4 relative overflow-hidden">
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>

        <div className="relative z-10 mb-8">
          <h2 className='text-center text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
            ➕ Add Product
          </h2>
        </div>

        <div className="relative z-10 space-y-4">
          <div className="">
            <input type="text" name='title' placeholder='Product Title' value={product.title} onChange={(e) => setProduct({
              ...product, title: e.target.value
            })}
              className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
          </div>
          <div className="">
            <input type="number" placeholder='Product Price' name='price' value={product.price} onChange={(e) => setProduct({
              ...product, price: e.target.value
            })}
              className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
          </div>
          <div className="">
            <input type="text" placeholder='Product Image URL' name='image' value={product.productImageUrl} onChange={(e) => setProduct({
              ...product, productImageUrl: e.target.value
            })}
              className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
          </div>
          <div className="">
            <input type="number" min={1} placeholder='Quantity' name='quantity' value={product.quantity} onChange={(e) => setProduct({
              ...product, quantity: e.target.value
            })}
              className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
          </div>
          <div className="">
            <select value={product.category} onChange={(e) => setProduct({
              ...product, category: e.target.value
            })}
              className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 text-gray-400 px-4 py-3 w-full rounded-xl outline-none transition-all duration-300'>
              <option disabled value=''>🏷️ Select Product Category</option>
              {
                categoryList.map((item, index) => (
                  <option key={index} className='capitalize bg-slate-900 text-white' value={item.name}>{item.name}</option>
                ))
              }
            </select>
          </div>

          <div className="">
            <textarea name='description' placeholder='Product Description' rows={5} value={product.description} onChange={(e) => setProduct({
              ...product, description: e.target.value
            })}
              className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300 resize-none'>

            </textarea>
          </div>

          <div className="pt-4">
            <button type='button' onClick={addProductFunction} className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 active:scale-95 w-full text-white text-center py-3 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 text-lg'>
              ✨ Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductPage