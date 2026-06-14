import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/myContext'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/FirebaseConfig'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import Loader from '../../components/Loader'

const Signup = () => {

    const { loading, setLoading } = useContext(myContext)
    const navigate = useNavigate()

    const [userSignup, setUserSignup] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })

    const userSignupFunction = async () => {
        if (userSignup.name === '' || userSignup.email === '' || userSignup.password === '') {
            return toast.error("All fields are empty!")
        }

        if (userSignup.password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        setLoading(true)
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    'en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric'
                })
            }
            console.log("Data to Firestore:", user);
            const userReference = collection(db, "users")
            await addDoc(userReference, user)

            setUserSignup({
                name: '',
                email: '',
                password: '',
                role: 'user'
            })
            toast.success("Signup Successfully")
            navigate('/login')

        } catch (error) {
            console.log(error)
            toast.error(error.code.split('/')[1].split('-').join(" "));

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
            {/* Animated background elements */}
            <div className='fixed inset-0 overflow-hidden pointer-events-none -z-10'>
              <div className='absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
              <div className='absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
            </div>
            
            {loading && <Loader />}
            <div className="signup_form min-w-[350px] w-120 relative backdrop-blur-md bg-gradient-to-br from-slate-800/50 to-slate-900/50 px-8 lg:px-10 py-10 border border-purple-500/30 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 overflow-hidden">
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>

                <div className="relative z-10 mb-6">
                    <h2 className='text-center text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'>
                        ✨ Signup
                    </h2>
                </div>

                <div className="mb-4 relative z-10">
                    <input type="text" placeholder='Full Name' value={userSignup.name} onChange={(e) => setUserSignup({
                        ...userSignup, name: e.target.value.toString()
                    })}
                     onInput={(e) => setUserSignup({
                        ...userSignup, name: e.target.value
                    })}
                        className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                </div>
                <div className="mb-4 relative z-10">
                    <input type="email" placeholder='Email Address' value={userSignup.email} onInput={(e) => setUserSignup({
                        ...userSignup, email: e.target.value
                    })}
                        className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                </div>
                <div className="mb-6 relative z-10">
                    <input type="password" placeholder='Password (min 6 characters)' value={userSignup.password} onInput={(e) => setUserSignup({
                        ...userSignup, password: e.target.value
                    })}
                        className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                </div>
                <div className="mb-6 relative z-10">
                    <button type='button' onClick={userSignupFunction} className='bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 active:scale-95 w-full text-white text-center py-3 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50'>
                        🎉 Create Account
                    </button>
                </div>

                <div className="relative z-10">
                    <h2 className='text-center text-gray-300'>Already have an account? <Link className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300' to={'/login'}>Login here</Link></h2>
                </div>
            </div>

        </div>
    )
}

export default Signup