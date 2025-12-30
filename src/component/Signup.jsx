import React, { useEffect, useState } from "react"
import SignupImg from "../asset/images/signup.webp"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../config/Config"

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConpassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/")
            } else {
                navigate("/signup")
            }
        })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (password !== conpassword) {
            alert("password doesn't match. Reenter the password again")
            return
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, email.trim(), password)
            console.log("Account created successfully:", res.user.email)
            alert("Account created successfully!")
            navigate("/login")
            setName("")
            setEmail("")
            setPassword("")
            setConpassword("")
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("This email is already registered. Please use another email to signin.")
            } else if (error.code === "auth/weak-password") {
                alert("Password should be at least 6 characters.")
            } else if (error.code === "auth/invalid-email") {
                alert("Invalid email format. Please check your email.")
            } else {
                alert("Failed to create account. Please try again.")
            }
            console.log("Error in creating account", error.code, error.message)
        }
    }

    return (<div className="flex justify-center items-center h-screen bg-linear-to-t from-orange-300 via-amber-300 to-yellow-300">
        <div className="flex items-center bg-gray-100 md:h-2/3 mt-20 shadow-lg shadow-black/20">
            <div className="h-full hidden md:block">
                <img src={SignupImg} alt="Login-Image" className="w-96 h-full" />
            </div>
            <form className="px-10 py-5 md:py-0" onSubmit={handleSubmit}>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">CREATE YOUR ACCOUNT</h1>
                <p className="text-center py-1">Enter email and password to get started.</p>
                <div className="my-3">
                    <label className="block">Name</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your Name" className="w-full border border-black p-1 rounded-md outline-none" required />
                </div>
                <div className="my-3">
                    <label className="block">Email</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter your email" className="w-full border border-black p-1 rounded-md outline-none" required />
                </div>
                <div className="my-3">
                    <label className="block">Password</label>
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" className="w-full border border-black p-1 rounded-md outline-none" required />
                </div>
                <div className="my-3">
                    <label className="block">Confirm Password</label>
                    <input type="password" value={conpassword} onChange={(event) => setConpassword(event.target.value)} placeholder="Enter your confirm password" className="w-full border border-black p-1 rounded-md outline-none" required />
                </div>
                <button type="submit" className="w-full text-white bg-orange-500 p-1 cursor-pointer font-medium">Create Account</button>
                <p className="mt-3">Already have an account? <Link to={"/login"} className="text-orange-500 animate-pulse">Login</Link></p>
            </form>
        </div>
    </div>)
}

export default Signup