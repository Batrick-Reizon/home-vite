import React, { useState, useContext, useEffect } from "react"
import Navimg from "../asset/images/logo.png"
import { GoSearch } from "react-icons/go"
import { IoPersonOutline } from "react-icons/io5"
import { IoMdLogOut } from "react-icons/io"
import { BsCart3 } from "react-icons/bs"
import { Link } from "react-router-dom"
import { RiMenu3Line } from "react-icons/ri"
import { FaXmark } from "react-icons/fa6"
import { CartContext } from "../context/Cartcontext"
import auth from "../config/Config"
import { signOut } from "firebase/auth"

function Navbar() {
    const [menu, setmenu] = useState(false)
    const [log, setLog] = useState(false)
    const { cart } = useContext(CartContext)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLog(true)
            } else {
                setLog(false)
            }
        })
    }, [])

    const handlelogout = () => {
        signOut(auth)
    }

    return (<div className="flex  items-center justify-around py-5 bg-white fixed top-0 w-full shadow-lg shadow-black/10 z-10">
        <img src={Navimg} alt="Navimg" className="w-40 lg:w-60 hidden md:flex" />
        <div className="hidden gap-3 lg:gap-10 sm:text-base lg:text-lg md:flex">
            <Link className="hover:text-orange-500 cursor-pointer" to={"/"}>Home</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/about"}>About</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/service"}>Service</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/property"}>Property</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/aminities"}>Aminities</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/blog"}>Blog</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/contact"}>Contact</Link>
        </div>
        <div className="flex items-center gap-5 text-lg">
            <GoSearch className="hover:text-orange-400 cursor-pointer box-content bg-white p-2 shadow-md shadow-black/20"></GoSearch>
            <Link to={"/login"}>{log ? <IoMdLogOut onClick={handlelogout} className="hover:text-orange-400 cursor-pointer box-content bg-white p-2 shadow-md shadow-black/20"></IoMdLogOut> : <IoPersonOutline className="hover:text-orange-400 cursor-pointer box-content bg-white p-2 shadow-md shadow-black/20"></IoPersonOutline>}</Link>
            <Link to={"/cart"} className="relative">
                <BsCart3 className="hover:text-orange-400 cursor-pointer box-content bg-white p-2 shadow-md shadow-black/20"></BsCart3>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cart.length}</span>
            </Link>
            <RiMenu3Line onClick={() => setmenu(true)} className="flex md:hidden hover:text-orange-400 cursor-pointer box-content bg-white p-2 shadow-md shadow-black/20"></RiMenu3Line>
        </div>

        {/* Sidebar Menu */}
        <div className="absolute top-0 flex flex-col justify-center left-0 p-10 bg-black text-white w-1/2 sm:w-2/5 h-screen gap-10 md:hidden transition-all duration-1000 ease-linear" style={{ top: menu ? "0vh" : "-100vh" }}>
            <div className="flex justify-end">
                <FaXmark className="hover:text-red-500" onClick={() => setmenu(false)}></FaXmark>
            </div>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/"} onClick={() => setmenu(false)}>Home</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/about"} onClick={() => setmenu(false)}>About</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/service"} onClick={() => setmenu(false)}>Service</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/property"} onClick={() => setmenu(false)}>Property</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/aminities"} onClick={() => setmenu(false)}>Aminities</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/blog"} onClick={() => setmenu(false)}>Blog</Link>
            <Link className="hover:text-orange-500 cursor-pointer" to={"/contact"} onClick={() => setmenu(false)}>Contact</Link>
        </div>
    </div>)
}

export default Navbar