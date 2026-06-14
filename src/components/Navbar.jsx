import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear('user')
        navigate('/login')
    }

    const cartItems = useSelector((state) => state.cart)

    const navList = (
        <ul className='flex space-x-3 text-white font-medium text-md px-5'>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            {
                !user ? <li>
                    <Link to={'/signup'}>Signup</Link>
                </li> : ""
            }
            {
                !user ? <li>
                    <Link to={'/login'}>Login</Link>
                </li> : ""
            }
            {user?.role === 'user' &&
                <li>
                    <Link to={'/userdashboard'}>User</Link>
                </li>
            }

            {/* Admin */}
            {user?.role === 'admin' && <li>
                <Link to={'/admindashboard'}>Admin</Link>
            </li>
            }
            {user && <li className='cursor-pointer' onClick={logout}>
                logout
            </li>
            }


            <li>
                <Link to={'/cart'}>Cart({cartItems.length})</Link>
            </li>
        </ul >
    )


    return (
        <nav className='bg-green-600 sticky top-0'>
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className='font-bold text-white text-2xl text-center'>E-Pak</h2></Link>
                </div>

                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>
                <SearchBar />
            </div>

        </nav>
    )
}

export default Navbar