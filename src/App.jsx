import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loader from './components/Loader'
import ScrollTop from './components/ScrollTop'
import MyState from './context/MyStates'
import { ToastContainer } from 'react-toastify'
import { ProtectedRouterForAdmin } from './protectedRoute/ProtedRouterForAdmin'
import { ProtectedRouterForUser } from './protectedRoute/ProtectedRouteForUser'
import { useCartPersist } from './hooks/useCartPersist'

// Lazy load pages for better code splitting
const NoPage = lazy(() => import('./pages/noPage/NoPage'))
const ProductInfo = lazy(() => import('./pages/ProductInfo/ProductInfo'))
const CartPage = lazy(() => import('./cart/CartPage'))
const AllProduct = lazy(() => import('./pages/allProduct/AllProduct'))
const Signup = lazy(() => import('./pages/registration/Signup'))
const Login = lazy(() => import('./pages/registration/Login'))
const UserDashboard = lazy(() => import('./pages/user/UserDashboard'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AddProductPage = lazy(() => import('./pages/admin/AddProductPage'))
const UpdateProductPage = lazy(() => import('./components/admin/UpdateProductPage'))
const CategoryPage = lazy(() => import('./categoryPage/CategoryPage'))

const AppContent = () => {
  // Persist cart changes with debouncing
  useCartPersist()

  return (
    <div>
      <MyState>
        <BrowserRouter>
          <ScrollTop />
          <ToastContainer />
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </BrowserRouter>
      </MyState>
    </div>
  )
}

const App = () => {
  return <AppContent />
}

export default App