import React, { useState, useEffect } from "react"
import AboutImage from "../asset/images/about-banner-1.png"
import SubAboutImage from "../asset/images/about-banner-2.jpg"
import { MdHome } from "react-icons/md"
import { IoLeafOutline } from "react-icons/io5"
import { BiDrink } from "react-icons/bi"
import { AiOutlineSafety } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import auth from "../config/Config"

function About() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/about")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    return (<div className={`md:flex items-center gap-10 px-5 lg:px-10 py-10 transition-all duration-2000 ease-in ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-75"}`}>

        <div className="relative w-full sm:h-screen flex justify-center items-center">
            <img src={AboutImage} alt="About-Image" className="sm:w-3/4 md:w-full xl:w-3/4 h-[75%] sm:h-[90%] mt-20 sm:mt-10" />
            <img src={SubAboutImage} alt="SubAbout-Image" className="absolute top-3/5 left-0 xl:left-20 w-48 sm:w-60 rounded" />
        </div>

        <div className="w-full sm:px-10 md:px-0">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-orange-600 bg-orange-100 p-5 rounded-full w-fit mt-5 md:mt-10 lg:mt-0">About Us</h1>
            <h1 className="text-xl sm:text-2xl lg:text-3xl my-5">The Leading Real Estate Rental Marketplace.</h1>
            <p className="text-gray-600">Over 500 family get there Dream houses</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 text-gray-600">
                <div className="flex items-center gap-3">
                    <MdHome className="text-orange-600 bg-orange-200 p-2 box-content rounded-full text-lg"></MdHome>
                    <p className="sm:text-lg">Smart Home Design</p>
                </div>
                <div className="flex items-center gap-3">
                    <IoLeafOutline className="text-orange-600 bg-orange-200 p-2 box-content rounded-full text-lg"></IoLeafOutline>
                    <p className="sm:text-lg">Beautiful Scene Around</p>
                </div>
                <div className="flex items-center gap-3">
                    <BiDrink className="text-orange-600 bg-orange-200 p-2 box-content rounded-full text-lg"></BiDrink>
                    <p className="sm:text-lg">Exceptional Lifestyle</p>
                </div>
                <div className="flex items-center gap-3">
                    <AiOutlineSafety className="text-orange-600 bg-orange-200 p-2 box-content rounded-full text-lg"></AiOutlineSafety>
                    <p className="sm:text-lg">Complete 24/7 Security</p>
                </div>
            </div>

            <br className="hidden sm:flex" />

            <Link className="bg-orange-600 py-2 px-5 sm:px-10 sm:py-3 text-white cursor-pointer font-medium relative overflow-hidden border border-orange-600 transition-all ease-in-out duration-1000 hover:text-black before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-white hover:before:scale-x-100 before:transition-transform before:duration-500" to={"/service"}><span className="relative z-10 text-lg">Our Service</span></Link>
        </div>


    </div>)
}

export default About