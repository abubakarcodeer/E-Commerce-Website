import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
    const stored = localStorage.getItem('cart');
    try {
        return stored ? JSON.parse(stored) : [];
    } catch {
        return []; // fallback if parsing fails
    }
})();

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },
        incrementQuantity(state, action) {
            state = state.map(item => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
                return item
            })
        },
        decrementQuantity: (state, action) => {
            state = state.map(item => {
                if (item.quantity !== 1) {
                    if (item.id === action.payload) {
                        item.quantity--;
                    }
                }
                return item
            })
        },
        clearCart: () => {
            return [];
        }
    }
})

export const { addToCart, clearCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer