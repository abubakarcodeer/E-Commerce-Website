import MyContext from './myContext'
import { toast } from 'react-toastify';
import { db } from '../firebase/FirebaseConfig';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, limit } from 'firebase/firestore';
import { useEffect, useState, useCallback } from 'react';

const myState = ({ children }) => {

    const [loading, setLoading] = useState(false);

    const [getAllProduct, setGetAllProduct] = useState([])

    const getAllProductFunction = useCallback(async () => {
        setLoading(true)

        try {
            const q = query(
                collection(db, 'products'),
                orderBy('time'),
                limit(100)
            )

            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach(doc => {
                    productArray.push({ ...doc.data(), id: doc.id });
                })
                setGetAllProduct(productArray)
            }, (error) => {
                console.error('Error fetching products:', error);
                toast.error('Failed to load products');
            })

            setLoading(false)
            return unsubscribe

        } catch (error) {
            console.error('Error in getAllProductFunction:', error);
            toast.error('Failed to load products');
            setLoading(false)
        }
    }, [])

    const [getAllOrder, setGetAllOrder] = useState([])

    const getAllOrderFunction = useCallback(async () => {
        try {
            const q = query(
                collection(db, 'order'),
                orderBy('time'),
                limit(100)
            )

            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach(doc => {
                    productArray.push({ ...doc.data(), id: doc.id });
                })
                setGetAllOrder(productArray)
            }, (error) => {
                console.error('Error fetching orders:', error);
            })

            return unsubscribe

        } catch (error) {
            console.error('Error in getAllOrderFunction:', error);
        }
    }, [])

    const orderDelete = useCallback(async (id) => {
        setLoading(true)

        try {
            await deleteDoc(doc(db, 'order', id))
            toast.success('Order Deleted successfully')
            getAllOrderFunction()

        } catch (error) {
            console.error('Error deleting order:', error);
            toast.error('Failed to delete order');
        } finally {
            setLoading(false)
        }
    }, [getAllOrderFunction])

    const [getAllUsers, setGetAllUser] = useState([])

    const getAllUserFunction = useCallback(async () => {
        try {
            const q = query(
                collection(db, 'users'),
                orderBy('time'),
                limit(100)
            )

            const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach(doc => {
                    userArray.push({ ...doc.data(), id: doc.id });
                })
                setGetAllUser(userArray)
            }, (error) => {
                console.error('Error fetching users:', error);
            })

            return unsubscribe

        } catch (error) {
            console.error('Error in getAllUserFunction:', error);
        }
    }, [])

    useEffect(() => {
        let unsubscribeProduct, unsubscribeOrder, unsubscribeUser;
        
        (async () => {
            unsubscribeProduct = await getAllProductFunction()
            unsubscribeOrder = await getAllOrderFunction()
            unsubscribeUser = await getAllUserFunction()
        })()
        
        return () => {
            if (unsubscribeProduct) unsubscribeProduct()
            if (unsubscribeOrder) unsubscribeOrder()
            if (unsubscribeUser) unsubscribeUser()
        }
    }, [getAllProductFunction, getAllOrderFunction, getAllUserFunction])


    return (
        <MyContext.Provider value={{
            loading, setLoading, getAllProduct, getAllUsers, orderDelete, getAllProductFunction, getAllOrder, setGetAllOrder
        }}>
            {children}
        </MyContext.Provider>
    )
}
export default myState