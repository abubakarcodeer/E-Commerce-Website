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
        <div className='flex justify-center bg-green-300 items-center h-screen'>
            {loading && <Loader />}
            <div className="signup_form min-w-[350px] w-120 bg-white/30 backdrop-blur-lg px-8 lg:px-8 py-6 border border-green-100 rounded-xl shadow-md">

                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-green-500'>
                        Signup
                    </h2>
                </div>

                <div className="mb-3">
                    <input type="text" placeholder='Full Name' value={userSignup.name} onChange={(e) => setUserSignup({
                        ...userSignup, name: e.target.value.toString()
                    })}
                     onInput={(e) => setUserSignup({
                        ...userSignup, name: e.target.value
                    })}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
                </div>
                <div className="mb-3">
                    <input type="email" placeholder='Email Adress' value={userSignup.email} onInput={(e) => setUserSignup({
                        ...userSignup, email: e.target.value
                    })}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
                </div>
                <div className="mb-5">
                    <input type="password" placeholder='Password' value={userSignup.password} onInput={(e) => setUserSignup({
                        ...userSignup, password: e.target.value
                    })}
                        className='bg-green-50 border border-green-200 px-2 py-2 w-full rounded-md outline-none placeholder-green-600' />
                </div>
                <div className="mb-5">
                    <button type='button' onClick={userSignupFunction} className='bg-green-500 hover:bg-green-600 w-full text-white text-center py-2 font-bold rounded-md'>
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className='text-green-500 font-bold ' to={'/login'}>Login</Link></h2>
                </div>
            </div>

        </div>
    )
}

export default Signup