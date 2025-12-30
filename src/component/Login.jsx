import React, { useEffect, useState } from "react"
import LoginImg from "../asset/images/login.jpg"
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "../config/Config"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/")
            } else {
                navigate("/login")
            }
        })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const res = await signInWithEmailAndPassword(auth, email.trim(), password)
            console.log("Login successfully:", res.user.email)
            alert("Login successfully!")
            navigate("/")
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert("Incorrect email or password. Please try again.")
            } else {
                alert("Login failed. Please try again")
            }
            console.log("Failed to login", error.code, error.message)
        }
    }

    return (<div className="flex justify-center items-center h-screen bg-linear-to-b from-orange-300 via-amber-300 to-yellow-300">
        <div className="flex items-center bg-gray-100 mt-20 shadow-lg shadow-black/20">
            <div className="hidden md:block">
                <img src={LoginImg} alt="Login-Image" className="w-96 h-96" />
            </div>
            <form className="px-10 py-5 md:py-0" onSubmit={handleSubmit}>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">WELCOME BACK</h1>
                <p className="text-center py-1">Welcome back! Please enter your details.</p>
                <div className="my-3">
                    <label className="block">Email</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="w-full border border-black p-1 rounded-md outline-none" required />
                </div>
                <div className="my-3">
                    <label className="block">Password</label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" className="w-full border border-black p-1 rounded-md outline-none" required />
                </div>
                <button type="submit" className="w-full text-white bg-orange-500 p-1 cursor-pointer font-medium">Login</button>
                <p className="mt-3">Don't have an account? <Link to={"/signup"} className="text-orange-500 animate-pulse">Register Now</Link></p>
            </form>
        </div>
    </div>)
}

export default Login