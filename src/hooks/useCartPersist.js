import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export const useCartPersist = () => {
    const cartItems = useSelector((state) => state.cart)
    const timeoutRef = useRef(null)

    useEffect(() => {
        // Clear previous timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        // Debounce localStorage write by 500ms
        timeoutRef.current = setTimeout(() => {
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }, 500)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [cartItems])
}
