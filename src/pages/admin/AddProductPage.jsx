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
    <div>
      <div className="flex justify-center  bg-green-300 items-center h-screen">
        {loading && <Loader/>}
        <div className="login_form min-w-[350px] w-120 bg-transparent backdrop-blur-lg px-8 lg:px-8 py-6 border border-green-100 rounded-xl shadow-md">

          <div className="mb-5">
            <h2 className='text-center text-2xl font-bold text-green-500'>
              Add Product
            </h2>
          </div>
          <div className="mb-3">
            <input type="text" name='title' placeholder='Product Title' value={product.title} onChange={(e) => setProduct({
              ...product, title: e.target.value
            })}
              className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
          </div>
          <div className="mb-3">
            <input type="number" placeholder='Product Price' name='price' value={product.price} onChange={(e) => setProduct({
              ...product, price: e.target.value
            })}
              className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
          </div>
          <div className="mb-3">
            <input type="text" placeholder='Product Image Url' name='image' value={product.productImageUrl} onChange={(e) => setProduct({
              ...product, productImageUrl: e.target.value
            })}
              className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
          </div>
          <div className="mb-3">
            <input type="number" min={1} placeholder='Quantity' name='image' value={product.quantity} onChange={(e) => setProduct({
              ...product, quantity: e.target.value
            })}
              className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
          </div>
          <div className="mb-3">
            <select value={product.category} onChange={(e) => setProduct({
              ...product, category: e.target.value
            })}
              className='bg-green-50 border border-green-200 text-green-600 px-1 py-2 w-full rounded-md outline-none' >
              <option disabled value=''>Select Product Category</option>
              {
                categoryList.map((item, index) => (
                  <option key={index} className='capitalize' value={item.name}>{item.name}</option>
                ))
              }
            </select>
          </div>

          <div className="mb-3">
            <textarea name='description' placeholder='Product Description' rows={5} value={product.description} onChange={(e) => setProduct({
              ...product, description: e.target.value
            })}
              className='bg-green-50 border border-green-200 px-2 py-1 w-full rounded-md outline-none placeholder-green-600' >

            </textarea>
          </div>

          <div className="mb-5">
            <button type='button' onClick={addProductFunction} className='bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md'>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductPage