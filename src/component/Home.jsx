import React, { useEffect, useState } from "react"
import { MdHome } from "react-icons/md"
import Hero from "../asset/images/hero-banner.png"
import auth from "../config/Config"
import { useNavigate } from "react-router-dom"

function Home() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    const handleClick = () => {
        alert("We are currently processing your enquiry. Please wait a moment.")
    }

    return (<div className={`py-10 px-5 grid grid-cols-1  lg:grid lg:grid-cols-2 gap-10 items-center mt-14 bg-gray-200 transition-all duration-2000 ease-in-out ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>

        <div className="sm:px-10 md:px-15 lg:px-20">
            <h4 className="flex gap-1 items-center text-lg font-medium"><MdHome className="text-xl text-orange-500"></MdHome>Real Estate Agency</h4>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold py-3 sm:py-5 w-3/4">Find Your Dream House By Us</h1>
            <p className="border-l border-orange-300 pl-5 text-gray-700 text-sm sm:text-base">We deliver expert, personalized real estate services backed by market knowledge and innovative solutions. We simplify buying, selling, and investing to help you achieve your property goals with confidence and ease.  Our platform brings you verified listings, detailed property insights, and expert support—all in one place. From modern apartments to luxury villas, we help you discover spaces that truly feel like home. We delivers expert, personalized real estate services backed by market knowledge and innovative solutions. Your dream home is closer than you think.
            </p>
            <p className="border-l border-orange-300 pl-5 my-5 text-gray-700 text-sm sm:text-base">We specialize in delivering high-quality real estate solutions tailored to your needs. With up-to-date listings, trusted agents, and market-driven insights, we ensure you make confident decisions. Explore properties that match your lifestyle, budget, and future goals. Explore premium properties, compare options, and take the next step toward owning or renting the perfect space with ease and confidence. Discover homes that match your lifestyle. From cozy family houses to modern city apartments, we make it easy to find, compare, and move into the property you'll love.</p>
            <button className="bg-orange-600 py-2 px-5 sm:px-10 sm:py-3 text-white sm:mt-5 cursor-pointer font-medium relative overflow-hidden border border-orange-600 transition-all ease-in-out duration-1000 hover:text-black before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-white hover:before:scale-x-100 before:transition-transform before:duration-500"><span className="relative z-10 font-medium" onClick={handleClick}>Make An Enquire</span></button>
        </div>

        <div className="sm:px-5 md:px-10">
            <img src={Hero} alt="Hero-Banner" />
        </div>

    </div>)
}

export default Home