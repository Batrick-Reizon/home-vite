import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import CartProvider from "../src/context/Cartcontext"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <CartProvider>
        <App></App>
    </CartProvider>
)