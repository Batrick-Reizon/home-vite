import React, { createContext, useState } from "react"

const CartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const exists = cart.find(cartItem => cartItem.id === item.id)

        if (exists) {
            alert("Item already added to card")
            return
        }
        setCart(prev => [...prev, item])
    }

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id))
    }

    const totalPrice = cart.reduce((total, item) => {
        return (total + Number(item.price))
    }, 0)

    const clearCart = () => {
        setCart([])
    }

    return (<CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider
export { CartContext }