import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/noPage/NoPage'
import ScrollTop from './components/ScrollTop'
import ProductInfo from './pages/ProductInfo/ProductInfo'
import CartPage from './cart/CartPage'
import AllProduct from './pages/allProduct/AllProduct'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './components/admin/UpdateProductPage'
import MyState from './context/MyStates'
import { ToastContainer } from 'react-toastify'
import { ProtectedRouterForAdmin } from './protectedRoute/ProtedRouterForAdmin'
import { ProtectedRouterForUser } from './protectedRoute/ProtectedRouteForUser'
import CategoryPage from './categoryPage/CategoryPage'

const App = () => {
  return (
    <div>
      <MyState>
        <BrowserRouter>
          <ScrollTop />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NoPage />} />
            <Route path='/productinfos/:id' element={<ProductInfo />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/allproduct' element={<AllProduct />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/category/:categoryname' element={<CategoryPage />} />

            <Route path='/userdashboard' element={
              <ProtectedRouterForUser>
                <UserDashboard />
              </ProtectedRouterForUser>
            } />

            <Route path='/admindashboard' element={
              <ProtectedRouterForAdmin>
                <AdminDashboard />
              </ProtectedRouterForAdmin>
            } />

            <Route path='/addproduct' element={
              <ProtectedRouterForAdmin>
                <AddProductPage />
              </ProtectedRouterForAdmin>
            } />

            <Route path='/updateproduct/:id' element={
              <ProtectedRouterForAdmin>
                <UpdateProductPage />
              </ProtectedRouterForAdmin>
            } />
          </Routes>
        </BrowserRouter>
      </MyState>
    </div>
  )
}

export default App