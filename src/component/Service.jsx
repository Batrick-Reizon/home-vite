import React, { useState, useEffect } from "react"
import SerImg1 from "../asset/images/service-1.png"
import SerImg2 from "../asset/images/service-2.png"
import SerImg3 from "../asset/images/service-3.png"
import { FaArrowRight } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import auth from "../config/Config"

function Service() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/service")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    return (<div className={`bg-gray-200 flex flex-col justify-center items-center p-5 sm:p-10 h-full w-full transition-all duration-2000 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}>
        <h4 className="text-orange-600 bg-orange-100 p-5 rounded-full sm:text-xl mt-20 sm:mt-14 font-medium">Our Services</h4>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-3 sm:py-5">Our Main Focus</h1>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 my-5">
            <div className="group relative overflow-hidden bg-white w-11/12 sm:w-[45%] md:w-[30%] px-5 py-10 text-center shadow-lg shadow-black/20">
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-600 scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                <img src={SerImg1} alt="Service-Image1" className="w-full flex justify-center px-5" />
                <h2 className="text-2xl font-semibold">Buy a Home</h2>
                <p className="py-3 text-gray-600">over 1000+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                <div className="flex items-center justify-center gap-3 cursor-pointer text-lg text-gray-400 group-hover:text-orange-600">
                    <button className="cursor-pointer">Find a Home</button> <FaArrowRight></FaArrowRight>
                </div>
            </div>
            <div className="group relative overflow-hidden bg-white w-11/12 sm:w-[45%] md:w-[30%] px-5 py-10 text-center shadow-lg shadow-black/20">
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-600 scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                <img src={SerImg2} alt="Service-Image1" className="w-full flex justify-center px-5" />
                <h2 className="text-2xl font-semibold">Rent a Home</h2>
                <p className="py-3 text-gray-600">over 300+ homes for rent available on the website, we can match you with a house you will want to call home.</p>
                <div className="flex items-center justify-center gap-3 cursor-pointer text-lg text-gray-400 group-hover:text-orange-600">
                    <button className="cursor-pointer">Find a Home</button> <FaArrowRight></FaArrowRight>
                </div>
            </div>
            <div className="group relative overflow-hidden bg-white w-11/12 sm:w-[45%] md:w-[30%] px-5 py-10 text-center shadow-lg shadow-black/20">
                <span className="absolute left-0 bottom-0 w-full h-1 bg-orange-600 scale-x-0 origin-left transition-all duration-500 ease-in-out group-hover:scale-x-100"></span>
                <img src={SerImg3} alt="Service-Image1" className="w-full flex justify-center px-5" />
                <h2 className="text-2xl font-semibold">Sell a Home</h2>
                <p className="py-3 text-gray-600">over 500+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                <div className="flex items-center justify-center gap-3 cursor-pointer text-lg text-gray-400 group-hover:text-orange-600">
                    <button className="cursor-pointer">Find a Home</button> <FaArrowRight></FaArrowRight>
                </div>
            </div>
        </div>

    </div>)
}

export default Service