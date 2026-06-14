import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { BiStar } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import myContext from '../../context/myContext'
import { db } from '../../firebase/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Loader from '../../components/Loader'
import { RiStarFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

const ProductInfo = () => {

  const { loading, setLoading } = useContext(myContext)
  const [product, setProduct] = useState('')

  const { id } = useParams()

  const getProductData = async () => {
    setLoading(true)
    try {
      const productTemp = await getDoc(doc(db, 'products', id))
      console.log(productTemp)
      setProduct({ ...productTemp.data(), id: productTemp.id })

    } catch (error) {
      console.log(error)
      toast.error(
        error?.code
          ? error.code.split('/')[1]?.split('-').join(" ")
          : "An unexpected error occurred"
      );
    } finally {
      setLoading(false)
    }
  }

  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const addCart = (item) => {
    dispatch(addToCart(item))
    toast.success("Add to cart")
  }

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    toast.success("Delete cart")
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])


  useEffect(() => {
    getProductData()
  }, [])

  return (
    <Layout>
      <section className='py-5 lg:py-16 font-poppins'>
        {loading ? <><Loader /></> :
          <div className='max-w-6xl px-4 mx-auto'>
            <div className="flex flex-wrap mb-24 -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                <div className="">
                  <div className="">
                    <img className='w-full lg:h-[32em] rounded-lg' src={product?.productImageUrl} alt={product.title} />
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="lg:pl-20">
                  <div className="mb-6">
                    <h2 className='max-w-xl mb-6 text-xl font-semibold
                   leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300'>
                      {product?.title}
                    </h2>
                    <div className="flex flex-wrap items-center mb-6">
                      <ul className='flex mb-4 lg:mb-0'>
                        <li>
                          <a href="">
                            <RiStarFill color='orange' size={24} />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <RiStarFill color='orange' size={24} />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <BiStar size={24} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className='inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400'>
                      <span>Rs.{product?.price}</span>
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className='mb-2 text-lg font-bold
                text-gray-700 dark:text-gray-300'>
                      Description :
                    </h2>
                    <p className='dark:text-gray-400'>
                      {product?.description}
                    </p>
                  </div>
                  <div className="mb6">
                    <div className="flex flex-wrap items-center mb-6">
                      {cartItems.some(p => p.id === product?.id)
                        ?
                        <button onClick={() => deleteCart(product)} className='bg-pink-700
                                                    hover:bg-pink-600 w-full text-white py-[4px]
                                                    rounded-lg font-bold'>
                          Delete from Cart
                        </button>
                        :
                        <button onClick={() => addCart(product)} className='bg-green-500
                                                    hover:bg-green-600 w-full text-white py-[4px]
                                                    rounded-lg font-bold'>
                          Add To Cart
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </section>
    </Layout>
  )
}

export default ProductInfo