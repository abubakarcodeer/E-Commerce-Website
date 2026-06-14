import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/MyContext';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/FirebaseConfig';
import { collection, onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';
import Loader from '../../components/Loader';

const Login = () => {

    const { loading, setLoading } = useContext(myContext);

    const navigate = useNavigate()

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    })

    const userLoginFunction = async () => {
        if (userLogin.email === '' || userLogin.password === '') {
            return toast.error("All field must be filled!")
        }
        setLoading(true)
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
            console.log(users)

            try {
                const q = query(
                    collection(db, 'users'),
                    where('uid', '==', users?.user?.uid)
                )

                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach(doc => {
                        user = doc.data();
                    })
                    localStorage.setItem('user', JSON.stringify(user))
                    setUserLogin({
                        email: '',
                        password: ''
                    })
                    toast.success("Login Successfully")

                    if (user.role === 'user') {
                        navigate('/userdashboard')
                    }
                    else {
                        navigate('/admindashboard')
                    }
                })

                return () => data

            } catch (error) {
                console.log(error)
                toast.error(error.code.split('/')[1].split('-').join(" "));
            }
            finally {
                setLoading(false)
            }

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
              <div className='absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse'></div>
              <div className='absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
            </div>
            
            {loading && <Loader />}
            <div className="login_form min-w-[350px] w-120 relative backdrop-blur-md bg-gradient-to-br from-slate-800/50 to-slate-900/50 px-8 lg:px-10 py-10 border border-purple-500/30 rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden">
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'></div>
                
                <div className="relative z-10 mb-6">
                    <h2 className='text-center text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent'>
                        🔐 Login
                    </h2>
                </div>
                <div className="mb-4 relative z-10">
                    <input type="email" placeholder='Email Address' onInput={(e) => setUserLogin({
                        ...userLogin, email: e.target.value
                    })}
                        className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                </div>
                <div className="mb-6 relative z-10">
                    <input type="password" placeholder='Password' onInput={(e) => setUserLogin({
                        ...userLogin, password: e.target.value
                    })}
                        className='backdrop-blur-sm bg-slate-700/50 border border-purple-500/30 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/20 px-4 py-3 w-full rounded-xl outline-none placeholder-gray-400 text-white transition-all duration-300' />
                </div>
                <div className="mb-6 relative z-10">
                    <button onClick={userLoginFunction} type='button' className='bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 active:scale-95 w-full text-white text-center py-3 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50'>
                        ✨ Login
                    </button>
                </div>

                <div className="relative z-10">
                    <h2 className='text-center text-gray-300'>Don't have an account? <Link className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold hover:from-purple-400 hover:to-pink-500 transition-all duration-300' to={'/signup'}>Signup here</Link></h2>
                </div>
            </div>

        </div>
    )
}

export default Login