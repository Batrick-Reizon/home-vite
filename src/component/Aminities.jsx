import React, { useState, useEffect } from "react"
import { IoCarSportOutline, IoWaterOutline, IoLibraryOutline, IoBedOutline, IoFootballOutline } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa6"
import { AiOutlineSafety } from "react-icons/ai"
import { LiaHeartbeatSolid } from "react-icons/lia"
import { GoHome } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import auth from "../config/Config"

function Aminities() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/aminities")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    return (<div className={`flex flex-col justify-center items-center bg-gray-200 h-full p-10 transition-all duration-2000 ease-linear ${show ? "opacity-100 translate-0" : "opacity-0 -translate-40"}`}>
        <h3 className="mt-20 text-orange-600 bg-orange-100 w-fit p-5 rounded-full text-base sm:text-xl font-medium">Our Aminities</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold py-5">Building Aminities</h1>
        <div className="flex flex-wrap gap-5 justify-around md:justify-center">
            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <IoCarSportOutline size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></IoCarSportOutline>
                <h3 className="my-5 text-xl font-semibold">Parking Space</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <IoWaterOutline size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></IoWaterOutline>
                <h3 className="my-5 text-xl font-semibold">Swimming Pool</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <AiOutlineSafety size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></AiOutlineSafety>
                <h3 className="my-5 text-xl font-semibold">Private Security</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <LiaHeartbeatSolid size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></LiaHeartbeatSolid>
                <h3 className="my-5 text-xl font-semibold">Medical Center</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <IoLibraryOutline size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></IoLibraryOutline>
                <h3 className="my-5 text-xl font-semibold">Library Area</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <IoBedOutline size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></IoBedOutline>
                <h3 className="my-5 text-xl font-semibold">King Size Beds</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <GoHome size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></GoHome>
                <h3 className="my-5 text-xl font-semibold">Smart Homes</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>

            <div className="group bg-white p-10 shadow-lg shadow-black/20 my-5 rounded flex flex-col items-center relative w-4/5 sm:w-2/5 md:w-1/4 lg:w-1/5 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                <IoFootballOutline size={50} className="bg-orange-100 p-5 box-content rounded-full text-orange-600"></IoFootballOutline >
                <h3 className="my-5 text-xl font-semibold">Kid's Playland</h3>
                <FaArrowRight className="absolute -bottom-5 left-5/12 bg-white box-content p-3 rounded-full text-gray-500 group-hover:text-orange-500" size={20}></FaArrowRight>
            </div>
        </div>
    </div>)
}

export default Aminities