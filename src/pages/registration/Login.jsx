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
        <div className='flex justify-center bg-green-300 items-center h-screen'>
            {loading && <Loader />}
            <div className="login_form min-w-[350px] w-120 bg-transparent backdrop-blur-lg px-8 lg:px-8 py-6 border border-green-100 rounded-xl shadow-md">

                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-green-500'>
                        Login
                    </h2>
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='Email Adress' onInput={(e) => setUserLogin({
                        ...userLogin, email: e.target.value
                    })}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
                </div>
                <div className="mb-5">
                    <input type="password" placeholder='Password' onInput={(e) => setUserLogin({
                        ...userLogin, password: e.target.value
                    })}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
                </div>
                <div className="mb-5">
                    <button onClick={userLoginFunction} type='button' className='bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md'>
                        Login
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Don't Have an account <Link className='text-green-500 font-bold ' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>

        </div>
    )
}

export default Login