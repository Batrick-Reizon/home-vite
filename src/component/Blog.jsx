import React, { useState, useEffect } from "react"
import BlogImg1 from "../asset/images/blog-1.png"
import BlogImg2 from "../asset/images/blog-2.jpg"
import BlogImg3 from "../asset/images/blog-3.jpg"
import BlogImg4 from "../asset/images/blog-4.jpg"
import BlogImg5 from "../asset/images/blog-5.jpg"
import BlogImg6 from "../asset/images/blog-6.jpeg"
import { IoMdPerson } from "react-icons/io"
import { MdStyle } from "react-icons/md"
import { SlCalender } from "react-icons/sl"
import { Link, useNavigate } from "react-router-dom"
import auth from "../config/Config"

function Blog() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/blog")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    return (<div className={`flex flex-col justify-center items-center h-full p-5 sm:p-10 transition-all duration-2000 ease-initial ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}`}>
        <h3 className="mt-20 text-orange-600 bg-orange-100 font-medium text-lg sm:text-xl py-2 px-5 rounded-full">News & Blogs</h3>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-5">Latest News Feeds</h1>

        <div className="flex flex-wrap gap-10 justify-around my-5">
            <div className="group w-full sm:w-3/4 md:w-2/5 lg:w-[30%]">
                <div className="overflow-hidden">
                    <img src={BlogImg1} alt="Blog-Image" className="w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="py-5 px-5 sm:px-10 shadow-lg shadow-black/10">
                    <div className="flex justify-between">
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <IoMdPerson className="text-orange-600"></IoMdPerson>
                            <p>by: Admin</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <MdStyle className="text-orange-600"></MdStyle>
                            <p>Interior</p>
                        </div>
                    </div>
                    <h1 className="my-3 md:text-xl lg:text-2xl font-semibold hover:text-orange-600">The Most Inspiring Interior Design Of 2025</h1>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between py-5">
                        <div className="flex items-center gap-1">
                            <SlCalender className="text-orange-600"></SlCalender>
                            <p className="text-gray-500">April 27, 2025</p>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Interior_design" className="text-red-500">Read More</a>
                    </div>
                </div>
            </div>

            <div className="group w-full sm:w-3/4 md:w-2/5 lg:w-[30%]">
                <div className="overflow-hidden">
                    <img src={BlogImg2} alt="Blog-Image" className="w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="py-5 px-5 sm:px-10 shadow-lg shadow-black/10">
                    <div className="flex justify-between">
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <IoMdPerson className="text-orange-600"></IoMdPerson>
                            <p>by: Admin</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <MdStyle className="text-orange-600"></MdStyle>
                            <p>Estate</p>
                        </div>
                    </div>
                    <h1 className="my-3 md:text-xl lg:text-2xl font-semibold hover:text-orange-600">Recent Commercial Real Estate Transactions</h1>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between py-5">
                        <div className="flex items-center gap-1">
                            <SlCalender className="text-orange-600"></SlCalender>
                            <p className="text-gray-500">June 08, 2025</p>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Real_estate_transaction" className="text-red-500">Read More</a>
                    </div>
                </div>
            </div>

            <div className="group w-full sm:w-3/4 md:w-2/5 lg:w-[30%]">
                <div className="overflow-hidden">
                    <img src={BlogImg3} alt="Blog-Image" className="w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="py-5 px-5 sm:px-10 shadow-lg shadow-black/10">
                    <div className="flex justify-between">
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <IoMdPerson className="text-orange-600"></IoMdPerson>
                            <p>by: Admin</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <MdStyle className="text-orange-600"></MdStyle>
                            <p>Room</p>
                        </div>
                    </div>
                    <h1 className="my-3 md:text-xl lg:text-2xl font-semibold hover:text-orange-600">Renovating a Living Room? Experts Share Their Secrets</h1>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between py-5">
                        <div className="flex items-center gap-1">
                            <SlCalender className="text-orange-600"></SlCalender>
                            <p className="text-gray-500">November 18, 2025</p>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Renovation" className="text-red-500 cursor-pointer">Read More</a>
                    </div>
                </div>
            </div>

            <div className="group w-full sm:w-3/4 md:w-2/5 lg:w-[30%]">
                <div className="overflow-hidden">
                    <img src={BlogImg4} alt="Blog-Image" className="w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="py-5 px-5 sm:px-10 shadow-lg shadow-black/10">
                    <div className="flex justify-between">
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <IoMdPerson className="text-orange-600"></IoMdPerson>
                            <p>by: Admin</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <MdStyle className="text-orange-600"></MdStyle>
                            <p>Investment</p>
                        </div>
                    </div>
                    <h1 className="my-3 md:text-xl lg:text-2xl font-semibold hover:text-orange-600">Real Estate Investment Strategies for Beginners</h1>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between py-5">
                        <div className="flex items-center gap-1">
                            <SlCalender className="text-orange-600"></SlCalender>
                            <p className="text-gray-500">January 05, 2025</p>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Real_estate_investing" className="text-red-500 cursor-pointer">Read More</a>
                    </div>
                </div>
            </div>

            <div className="group w-full sm:w-3/4 md:w-2/5 lg:w-[30%]">
                <div className="overflow-hidden">
                    <img src={BlogImg5} alt="Blog-Image" className="w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="py-5 px-5 sm:px-10 shadow-lg shadow-black/10">
                    <div className="flex justify-between">
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <IoMdPerson className="text-orange-600"></IoMdPerson>
                            <p>by: Admin</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <MdStyle className="text-orange-600"></MdStyle>
                            <p>Price</p>
                        </div>
                    </div>
                    <h1 className="my-3 md:text-xl lg:text-2xl font-semibold hover:text-orange-600">How to Sell Your Home Faster at the Best Price</h1>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between py-5">
                        <div className="flex items-center gap-1">
                            <SlCalender className="text-orange-600"></SlCalender>
                            <p className="text-gray-500">September 18, 2025</p>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Price-based_selling" className="text-red-500 cursor-pointer">Read More</a>
                    </div>
                </div>
            </div>

            <div className="group w-full sm:w-3/4 md:w-2/5 lg:w-[30%]">
                <div className="overflow-hidden">
                    <img src={BlogImg6} alt="Blog-Image" className="w-full h-80 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div className="py-5 px-5 sm:px-10 shadow-lg shadow-black/10">
                    <div className="flex justify-between">
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <IoMdPerson className="text-orange-600"></IoMdPerson>
                            <p>by: Admin</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-1 hover:text-orange-600 w-fit">
                            <MdStyle className="text-orange-600"></MdStyle>
                            <p>Property</p>
                        </div>
                    </div>
                    <h1 className="my-3 md:text-xl lg:text-2xl font-semibold hover:text-orange-600">How to Choose the Right Commercial Property</h1>
                    <hr className="text-gray-300" />

                    <div className="flex justify-between py-5">
                        <div className="flex items-center gap-1">
                            <SlCalender className="text-orange-600"></SlCalender>
                            <p className="text-gray-500">December 25, 2025</p>
                        </div>
                        <a href="https://en.wikipedia.org/wiki/Commercial_property" className="text-red-500 cursor-pointer">Read More</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-orange-600 mt-10 p-10 md:w-10/12 flex flex-wrap lg:flex-nowrap items-center justify-center sm:justify-between">
            <div className="text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Looking for a dream home?</h1>
                <p className="mt-5 text-base md:text-lg">We can help you realize your dream of a new home</p>
            </div>
            <button className="bg-white py-3 px-5 sm:px-10 mt-5 lg:mt-0 text-black cursor-pointer font-medium relative overflow-hidden transition-all ease-in-out duration-1000 hover:text-white before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-black hover:before:scale-x-100 before:transition-transform before:duration-500"><Link className="relative z-10 md:text-lg" to={"/property"}>Explore Properties ➔</Link></button>
        </div>

    </div>)
}

export default Blog