import React, { useMemo, useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    // Load user once on mount
    useEffect(() => {
        const userData = localStorage.getItem('user')
        setUser(userData ? JSON.parse(userData) : null)
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('user')
        setUser(null)
        navigate('/login')
    }, [navigate])

    const cartItems = useSelector((state) => state.cart)

    const navList = useMemo(() => (
        <ul className='flex space-x-1 text-white font-medium text-sm px-5'>
            <li className='px-3 py-2 rounded-lg hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300'>
                <Link to={'/'}>Home</Link>
            </li>
            <li className='px-3 py-2 rounded-lg hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300'>
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            {
                !user ? <li className='px-3 py-2 rounded-lg hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300'>
                    <Link to={'/signup'}>Signup</Link>
                </li> : null
            }
            {
                !user ? <li className='px-3 py-2 rounded-lg hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300'>
                    <Link to={'/login'}>Login</Link>
                </li> : null
            }
            {user?.role === 'user' &&
                <li className='px-3 py-2 rounded-lg hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300'>
                    <Link to={'/userdashboard'}>User</Link>
                </li>
            }

            {user?.role === 'admin' && <li className='px-3 py-2 rounded-lg hover:bg-purple-600/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300'>
                <Link to={'/admindashboard'}>Admin</Link>
            </li>
            }
            {user && <li className='px-3 py-2 rounded-lg cursor-pointer hover:bg-red-600/40 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300' onClick={logout}>
                Logout
            </li>
            }

            <li className='relative ml-3 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 hover:border-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300'>
                <Link to={'/cart'} className='flex items-center gap-2'>
                    <span>Cart</span>
                    {cartItems.length > 0 && <span className='absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg'>{cartItems.length}</span>}
                </Link>
            </li>
        </ul>
    ), [user, cartItems.length, logout])


    return (
        <nav className='sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-opacity-95 border-b border-purple-500/30 shadow-lg shadow-purple-500/20'>
            <div className="lg:flex lg:justify-between items-center py-4 lg:px-6">
                <div className="left py-3 lg:py-0">
                    <Link to={'/'} className='group'>
                        <h2 className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-3xl text-center font-black tracking-wider drop-shadow-lg group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300'>E-Pak</h2>
                    </Link>
                </div>

                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>
                <SearchBar />
            </div>
        </nav>
    )
}


export default React.memo(Navbar)