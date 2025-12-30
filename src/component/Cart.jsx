import React, { useContext, useEffect } from "react"
import { CartContext } from "../context/Cartcontext"
import { useNavigate } from "react-router-dom"
import auth from "../config/Config"

function Cart() {
    const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/cart")
            } else {
                navigate("/login")
            }
        })
    }, [])

    if (cart.length === 0) {
        return (<div className="text-center">
            <h1 className="text-3xl font-bold mt-28">Your Cart 🛒</h1>
            <p className="my-3">Cart is empty. Please add some properties.</p>
        </div>)
    }

    const handleSubmit = () => {
        alert("Your order placed successfully! 🎉")
        clearCart()
    }

    return (<div className="mt-24 p-5">
        <h1 className="text-3xl font-bold text-center">Your Cart 🛒</h1>

        {cart.map((item) => {
            return (
                <div key={item.id} className="border sm:flex p-4 gap-5 my-5">
                    <div className="w-full flex justify-center sm:w-fit">
                        <img src={item.image} alt="Item_Image" className="w-5/6 h-52 sm:w-32 sm:h-24 text-center" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center my-3 sm:my-0 text-center sm:text-start">
                        <h1 className="text-xl font-semibold">{item.title}</h1>
                        <h3 className="text-lg font-medium">{item.location}</h3>
                        <h3 className="text-lg font-medium text-red-500">{item.price}</h3>
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 px-5 py-2 text-white font-medium cursor-pointer">Remove Cart</button>
                    </div>
                </div>
            )
        })}

        <div className="border-t mt-5 text-right">
            <h2 className="text-xl font-semibold my-3">Total Price: Rs {totalPrice}</h2>
            <button onClick={handleSubmit} className="bg-blue-500 px-5 py-2 font-medium text-white cursor-pointer">Place Order</button>
        </div>
    </div>)
}

export default Cart