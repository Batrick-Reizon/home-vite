import React, { useState, useEffect } from "react"
import ContactImg from "../asset/images/logo.png"
import { IoLocationOutline } from "react-icons/io5"
import { BsTelephone } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import auth from "../config/Config"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [subject, SetSubject] = useState("")
    const [message, setMessage] = useState("")
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/contact")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    const handleSubmit = () => {
        alert("Your Message Send Successfully!")
    }

    return (<div className={`bg-gray-200 p-10 h-full transition-all duration-2000 ease-in-out ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        <h1 className="mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Contact Us</h1>

        <div className="flex flex-wrap gap-5 my-10 mx-10 justify-between">
            <div className="w-full lg:w-2/6 flex flex-col">
                <img src={ContactImg} alt="Contact-Image" className="w-40 sm:w-60 lg:w-80" />
                <p className="my-3">Find Best Home</p>
                <div>
                    <div className="flex gap-1 items-center mt-3">
                        <IoLocationOutline className="text-red-500"></IoLocationOutline>
                        <a href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu/data=!4m2!3m1!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433?sa=X&ved=1t:242&ictx=111" className="hover:text-orange-600">Chennai, TamilNadu</a>
                    </div>
                    <div className="flex gap-1 items-center my-3">
                        <BsTelephone className="text-red-500"></BsTelephone>
                        <a href="tel:+0123-456789" className="hover:text-orange-600">+0123-456789</a>
                    </div>
                    <div className="flex gap-1 items-center mb-3">
                        <CiMail className="text-red-500"></CiMail>
                        <a href="mailto:contact@homeverse.com" className="hover:text-orange-600">contact@homeverse.com</a>
                    </div>
                </div>
                <div className="flex gap-5 my-3 text-xl">
                    <FaFacebook className="hover:text-orange-600 cursor-pointer"></FaFacebook>
                    <FaTwitter className="hover:text-orange-600 cursor-pointer"></FaTwitter>
                    <FaLinkedin className="hover:text-orange-600 cursor-pointer"></FaLinkedin>
                    <FaYoutube className="hover:text-orange-600 cursor-pointer"></FaYoutube>
                </div>
            </div>

            <div className="flex flex-wrap w-full lg:w-3/5 justify-between lg:justify-around gap-5">
                <div className="w-full sm:w-[30%]">
                    <h3 className="font-semibold md:text-xl lg:text-2xl">Company</h3>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">About</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Blog</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">All Product</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Locations Map</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">FAQ</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Contact Us</p>
                </div>
                <div className="w-full sm:w-[30%]">
                    <h3 className="font-semibold md:text-xl lg:text-2xl">Services</h3>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Order Tracking</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Wish List</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Login</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">My Account</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Terms & Conditions</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Promotional Offers</p>
                </div>
                <div className="w-full sm:w-[30%]">
                    <h3 className="font-semibold md:text-xl lg:text-2xl">Customer Care</h3>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Login</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">My Account</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Wish List</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Order Tracking</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">FAQ</p>
                    <p className="my-3 hover:text-orange-600 cursor-pointer">Contact Us</p>
                </div>
            </div>
        </div>

        <h1 className="font-semibold text-xl md:text-3xl text-center mb-5">Touch With Us</h1>

        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white p-10 lg:px-20 rounded shadow-2xl shadow-black/80">
                <div>
                    <label className="block font-semibold">Name</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="border border-black p-1 w-full my-3 outline-none" placeholder="Enter Your Name" required />
                </div>
                <div>
                    <label className="block font-semibold">Email</label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="border border-black p-1 w-full my-3 outline-none" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <label className="block font-semibold">Phone Number</label>
                    <input type="number" value={number} onChange={(event) => setNumber(event.target.value)} className="border border-black p-1 w-full my-3 outline-none" placeholder="Enter Your Number" required />
                </div>
                <div>
                    <label className="block font-semibold">Subject</label>
                    <input type="text" value={subject} onChange={(event) => SetSubject(event.target.value)} className="border border-black p-1 w-full my-3 outline-none" placeholder="Enter Subject" required />
                </div>
                <div>
                    <label className="block font-semibold">Message</label>
                    <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="border border-black p-1 w-full my-3 outline-none h-20" placeholder="Enter Your Message" required></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="font-semibold border border-black bg-black text-white px-5 py-2 cursor-pointer transition-all duration-500 ease hover:bg-white hover:text-black">Send</button>
                </div>
            </form>
        </div>
    </div>)
}

export default Contact