import MyContext from './myContext'
import { toast } from 'react-toastify';
import { db } from '../firebase/FirebaseConfig';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const myState = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const [getAllProduct, setGetAllProduct] = useState([])

    const getAllProductFunction = async () => {
        setLoading(true)

        try {
            const q = query(
                collection(db, 'products'),
                orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach(doc => {
                    productArray.push({ ...doc.data(), id: doc.id });
                })
                setGetAllProduct(productArray)
            })

            return () => data

        } catch (error) {
            console.log(error)
            toast.error(error.code.split('/')[1].split('-').join(" "));

        } finally {
            setLoading(false)
        }

    }

    const [getAllOrder, setGetAllOrder] = useState([])

    const getAllOrderFunction = async () => {
        setLoading(true)

        try {
            const q = query(
                collection(db, 'order'),
                orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach(doc => {
                    productArray.push({ ...doc.data(), id: doc.id });
                })
                setGetAllOrder(productArray)
            })

            return () => data

        } catch (error) {
            console.log(error)
            toast.error(error.code.split('/')[1].split('-').join(" "));

        } finally {
            setLoading(false)
        }

    }

    const orderDelete = async (id) => {

        setLoading(true)

        try {
            await deleteDoc(doc(db, 'order', id))
            toast.success('Order Deleted successfully')
            getAllOrderFunction()

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)
        }

    }

    const [getAllUsers, setGetAllUser] = useState([])

    const getAllUserFunction = async (id) => {

        setLoading(true)

        try {
            const q = query(
                collection(db, 'users'),
                orderBy('time')
            )

            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach(doc => {
                    userArray.push({ ...doc.data(), id: doc.id });
                })
                setGetAllUser(userArray)
            })

            return () => data

        } catch (error) {
            console.log(error)
            toast.error(error.code.split('/')[1].split('-').join(" "));

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllProductFunction()
        getAllOrderFunction()
        getAllUserFunction()
    }, [])


    return (
        <MyContext.Provider value={{
            loading, setLoading, getAllProduct, getAllUsers, orderDelete, getAllProductFunction, getAllOrder, setGetAllOrder
        }}>
            {children}
        </MyContext.Provider>
    )
}
export default myState