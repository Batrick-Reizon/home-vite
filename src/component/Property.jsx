import React, { useState, useEffect, useContext } from "react"
import ProImg1 from "../asset/images/property-1.jpg"
import ProImg2 from "../asset/images/property-2.jpg"
import ProImg3 from "../asset/images/property-3.png"
import ProImg4 from "../asset/images/property-4.jpg"
import ProImg5 from "../asset/images/property-5.jpg"
import ProImg6 from "../asset/images/property-6.jpeg"
import { IoLocation, IoBedOutline } from "react-icons/io5"
import { FaCamera, FaVideo } from "react-icons/fa"
import { BiBath } from "react-icons/bi"
import { FaRegSquareFull } from "react-icons/fa6"
import { PiCaretUpDownBold } from "react-icons/pi"
import { CiCirclePlus } from "react-icons/ci"
import { CartContext } from "../context/Cartcontext"
import { useNavigate } from "react-router-dom"
import auth from "../config/Config"

function Property() {
    const [liked, setLiked] = useState([false, false, false, false, false, false])
    const [show, setShow] = useState(false)
    const { addToCart } = useContext(CartContext)
    const navigate = useNavigate()

    const property1 = {
        id: 1,
        title: "New Apartment Nice View",
        price: 29900,
        image: ProImg1,
        location: "Nagercoil, TamilNadu"
    }

    const property2 = {
        id: 2,
        title: "Modern Apartments",
        price: 34500,
        image: ProImg2,
        location: "Madurai, TamilNadu"
    }

    const property3 = {
        id: 3,
        title: "Luxury villa in Rego Park",
        price: 35999,
        image: ProImg3,
        location: "Chennai, TamilNadu"
    }

    const property4 = {
        id: 4,
        title: "The Infinity Villa",
        price: 45000,
        image: ProImg4,
        location: "Trichy, TamilNadu"
    }

    const property5 = {
        id: 5,
        title: "The Grand Estate",
        price: 40900,
        image: ProImg5,
        location: "Tirunelveli, TamilNadu"
    }

    const property6 = {
        id: 6,
        title: "The OG Old Villa",
        price: 25000,
        image: ProImg6,
        location: "Kochi, Kerala"
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                navigate("/property")
            } else {
                navigate("/login")
            }
        })
        setShow(true)
    }, [])

    const toggleLike = (index) => {
        setLiked(prev => prev.map((item, i) => i === index ? !item : item))
    }

    return (<div className={`p-5 sm:p-10 transition-all duration-2000 ease ${show ? "opacity-100 scale-y-100" : "opacity-0 scale-y-90"}`}>
        <div className="flex justify-center">
            <h4 className="mt-20 text-orange-600 bg-orange-100 rounded-full px-5 py-3 w-fit sm:text-xl font-medium">Properties</h4>
        </div>
        <h1 className="text-2xl lg:text-5xl font-bold text-center py-5">Featured Listings</h1>
        <div className="flex flex-wrap justify-around gap-3">
            <div className=" group sm:my-5 sm:w-[48%] lg:w-[32%]">
                <div className="relative overflow-hidden">
                    <img src={ProImg1} alt="Property-Image" className="w-full h-96 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
                    <p className="bg-green-500 w-fit px-3 py-1 text-white font-medium absolute top-3 right-5 text-sm md:text-base">FOR RENT</p>
                    <div className="absolute bottom-2 flex text-white w-full px-5 text-sm md:text-base">
                        <div className="flex items-center gap-1 w-[80%]">
                            <IoLocation className="text-red-500"></IoLocation>
                            <p className="hover:text-orange-600 cursor-pointer">Nagercoil, TamilNadu</p>
                        </div>
                        <div className="flex gap-2 w-[10%]">
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaCamera></FaCamera>
                                <p>4</p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaVideo></FaVideo>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-lg shadow-black/10">
                    <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">Rs 29,900/<span className="text-base md:text-lg font-medium">Month</span> </h2>
                    <h2 className="text-xl md:text-3xl hover:text-orange-600 font-semibold py-2 cursor-default">New Apartment Nice View</h2>
                    <p className="text-gray-500 text-sm md:text-base">Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                    <div className="flex justify-between py-3 text-gray-500 text-sm md:text-base">
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>3</p>
                                <IoBedOutline></IoBedOutline>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>2</p>
                                <BiBath></BiBath>
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>3450</p>
                                <FaRegSquareFull></FaRegSquareFull>
                            </div>
                            <p>Square Ft</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <h4 className="font-bold md:text-lg hover:text-orange-600 cursor-default">Rajesh</h4>
                            <p className="text-gray-500 text-sm md:text-base">Estate Agents</p>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <PiCaretUpDownBold className="box-content"></PiCaretUpDownBold>
                            </div>
                            <div className="bg-gray-200 p-1 hover:bg-amber-300 text-gray-500 hover:text-white cursor-pointer" onClick={() => toggleLike(0)}>
                                {liked[0] ? <i className="fa-solid fa-heart text-red-500"></i> : <i className="fa-regular fa-heart"></i>}
                            </div>
                            <div className="bg-gray-200 p-2 hover:bg-amber-500 hover:text-white cursor-pointer">
                                <CiCirclePlus className="box-content" onClick={() => addToCart(property1)}></CiCirclePlus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group sm:my-5 sm:w-[48%] lg:w-[32%]">
                <div className="relative overflow-hidden">
                    <img src={ProImg2} alt="Property-Image" className="w-full h-96 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
                    <p className="bg-red-500 w-fit px-3 py-1 text-white font-medium absolute top-3 right-5 text-sm md:text-base">FOR SALE</p>
                    <div className="absolute bottom-2 flex text-white w-full px-5 text-sm md:text-base">
                        <div className="flex items-center gap-1 w-[80%] ">
                            <IoLocation className="text-red-500"></IoLocation>
                            <p className="hover:text-orange-600 cursor-pointer">Madurai, TamilNadu</p>
                        </div>
                        <div className="flex gap-2 w-[10%]">
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaCamera></FaCamera>
                                <p>4</p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaVideo></FaVideo>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-lg shadow-black/10">
                    <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">Rs 34,500/<span className="text-base md:text-lg font-medium">Month</span> </h2>
                    <h2 className="text-xl md:text-3xl hover:text-orange-600 font-semibold py-2 cursor-default">Modern Apartments</h2>
                    <p className="text-gray-500 text-sm md:text-base">Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                    <div className="flex justify-between py-3 text-gray-500 text-sm md:text-base">
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>3</p>
                                <IoBedOutline></IoBedOutline>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>2</p>
                                <BiBath></BiBath>
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>3450</p>
                                <FaRegSquareFull></FaRegSquareFull>
                            </div>
                            <p>Square Ft</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <h4 className="font-bold md:text-lg hover:text-orange-600 cursor-default">Sundar</h4>
                            <p className="text-gray-500 text-sm md:text-base">Estate Agents</p>
                        </div>
                        <div className="flex gap-3 text-lg">
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <PiCaretUpDownBold className="box-content"></PiCaretUpDownBold>
                            </div>
                            <div className="bg-gray-200 p-1 text-gray-500 hover:bg-amber-300 hover:text-white cursor-pointer" onClick={() => toggleLike(1)}>
                                {liked[1] ? <i class="fa-solid fa-heart text-red-500"></i> : <i class="fa-regular fa-heart"></i>}
                            </div>
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <CiCirclePlus className="box-content" onClick={() => addToCart(property2)}></CiCirclePlus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group sm:my-5 sm:w-[48%] lg:w-[32%]">
                <div className="relative overflow-hidden">
                    <img src={ProImg3} alt="Property-Image" className="w-full h-96 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
                    <p className="bg-green-500 w-fit px-3 py-1 text-white font-medium absolute top-3 right-5 text-sm md:text-base">FOR RENT</p>
                    <div className="absolute bottom-2 flex text-white w-full px-5 text-sm md:text-base">
                        <div className="flex items-center gap-1 w-[80%]">
                            <IoLocation className="text-red-500"></IoLocation>
                            <p className="hover:text-orange-600 cursor-pointer">Chennai, TamilNadu</p>
                        </div>
                        <div className="flex gap-2 w-[10%]">
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaCamera></FaCamera>
                                <p>4</p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaVideo></FaVideo>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-lg shadow-black/10">
                    <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">Rs 35,999/<span className="text-base md:text-lg font-medium">Month</span> </h2>
                    <h2 className="text-xl md:text-3xl hover:text-orange-600 font-semibold py-2 cursor-default">Luxury villa in Rego Park</h2>
                    <p className="text-gray-500 text-sm md:text-base">Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                    <div className="flex justify-between py-3 text-gray-500 text-sm md:text-base">
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>3</p>
                                <IoBedOutline></IoBedOutline>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>2</p>
                                <BiBath></BiBath>
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>3450</p>
                                <FaRegSquareFull></FaRegSquareFull>
                            </div>
                            <p>Square Ft</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <h4 className="font-bold md:text-lg hover:text-orange-600 cursor-default">Kamal</h4>
                            <p className="text-gray-500 text-sm md:text-base">Estate Agents</p>
                        </div>
                        <div className="flex gap-3 text-lg">
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <PiCaretUpDownBold className="box-content"></PiCaretUpDownBold>
                            </div>
                            <div className="bg-gray-200 p-1 text-gray-500 hover:bg-amber-300 hover:text-white cursor-pointer" onClick={() => toggleLike(2)}>
                                {liked[2] ? <i class="fa-solid fa-heart text-red-500"></i> : <i class="fa-regular fa-heart"></i>}
                            </div>
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <CiCirclePlus className="box-content" onClick={() => addToCart(property3)}></CiCirclePlus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" group sm:my-5 sm:w-[48%] lg:w-[32%]">
                <div className="relative overflow-hidden">
                    <img src={ProImg4} alt="Property-Image" className="w-full h-96 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
                    <p className="bg-blue-500 w-fit px-3 py-1 text-white font-medium absolute top-3 right-5 text-sm md:text-base">FOR BUY</p>
                    <div className="absolute bottom-2 flex text-white w-full px-5 text-sm md:text-base">
                        <div className="flex items-center gap-1 w-[80%]">
                            <IoLocation className="text-red-500"></IoLocation>
                            <p className="hover:text-orange-600 cursor-pointer">Trichy, TamilNadu</p>
                        </div>
                        <div className="flex gap-2 w-[10%]">
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaCamera></FaCamera>
                                <p>4</p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaVideo></FaVideo>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-lg shadow-black/10">
                    <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">Rs 45,000/<span className="text-base md:text-lg font-medium">Month</span> </h2>
                    <h2 className="text-xl md:text-3xl hover:text-orange-600 font-semibold py-2 cursor-default">The Infinity Villa</h2>
                    <p className="text-gray-500 text-sm md:text-base">Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                    <div className="flex justify-between py-3 text-gray-500 text-sm md:text-base">
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>3</p>
                                <IoBedOutline></IoBedOutline>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>2</p>
                                <BiBath></BiBath>
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>3450</p>
                                <FaRegSquareFull></FaRegSquareFull>
                            </div>
                            <p>Square Ft</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <h4 className="font-bold md:text-lg hover:text-orange-600 cursor-default">Kannan</h4>
                            <p className="text-gray-500 text-sm md:text-base">Estate Agents</p>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <PiCaretUpDownBold className="box-content"></PiCaretUpDownBold>
                            </div>
                            <div className="bg-gray-200 p-1 hover:bg-amber-300 text-gray-500 hover:text-white cursor-pointer" onClick={() => toggleLike(3)}>
                                {liked[3] ? <i className="fa-solid fa-heart text-red-500"></i> : <i className="fa-regular fa-heart"></i>}
                            </div>
                            <div className="bg-gray-200 p-2 hover:bg-amber-500 hover:text-white cursor-pointer">
                                <CiCirclePlus className="box-content" onClick={() => addToCart(property4)}></CiCirclePlus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" group sm:my-5 sm:w-[48%] lg:w-[32%]">
                <div className="relative overflow-hidden">
                    <img src={ProImg5} alt="Property-Image" className="w-full h-96 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
                    <p className="bg-red-500 w-fit px-3 py-1 text-white font-medium absolute top-3 right-5 text-sm md:text-base">FOR SALE</p>
                    <div className="absolute bottom-2 flex text-white w-full px-5 text-sm md:text-base">
                        <div className="flex items-center gap-1 w-[80%]">
                            <IoLocation className="text-red-500"></IoLocation>
                            <p className="hover:text-orange-600 cursor-pointer">Tirunelveli, TamilNadu</p>
                        </div>
                        <div className="flex gap-2 w-[10%]">
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaCamera></FaCamera>
                                <p>4</p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaVideo></FaVideo>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-lg shadow-black/10">
                    <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">Rs 40,900/<span className="text-base md:text-lg font-medium">Month</span> </h2>
                    <h2 className="text-xl md:text-3xl hover:text-orange-600 font-semibold py-2 cursor-default">The Grand Estate</h2>
                    <p className="text-gray-500 text-sm md:text-base">Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                    <div className="flex justify-between py-3 text-gray-500 text-sm md:text-base">
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>3</p>
                                <IoBedOutline></IoBedOutline>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>2</p>
                                <BiBath></BiBath>
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>3450</p>
                                <FaRegSquareFull></FaRegSquareFull>
                            </div>
                            <p>Square Ft</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <h4 className="font-bold md:text-lg hover:text-orange-600 cursor-default">Suresh</h4>
                            <p className="text-gray-500 text-sm md:text-base">Estate Agents</p>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <PiCaretUpDownBold className="box-content"></PiCaretUpDownBold>
                            </div>
                            <div className="bg-gray-200 p-1 hover:bg-amber-300 text-gray-500 hover:text-white cursor-pointer" onClick={() => toggleLike(4)}>
                                {liked[4] ? <i className="fa-solid fa-heart text-red-500"></i> : <i className="fa-regular fa-heart"></i>}
                            </div>
                            <div className="bg-gray-200 p-2 hover:bg-amber-500 hover:text-white cursor-pointer">
                                <CiCirclePlus className="box-content" onClick={() => addToCart(property5)}></CiCirclePlus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" group sm:my-5 sm:w-[48%] lg:w-[32%]">
                <div className="relative overflow-hidden">
                    <img src={ProImg6} alt="Property-Image" className="w-full h-96 group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
                    <p className="bg-blue-500 w-fit px-3 py-1 text-white font-medium absolute top-3 right-5 text-sm md:text-base">FOR BUY</p>
                    <div className="absolute bottom-2 flex text-white w-full px-5 text-sm md:text-base">
                        <div className="flex items-center gap-1 w-[80%]">
                            <IoLocation className="text-red-500"></IoLocation>
                            <p className="hover:text-orange-600 cursor-pointer">Kochi, Kerala</p>
                        </div>
                        <div className="flex gap-2 w-[10%]">
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaCamera></FaCamera>
                                <p>4</p>
                            </div>
                            <div className="flex items-center gap-1 hover:text-orange-600 cursor-pointer">
                                <FaVideo></FaVideo>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 shadow-lg shadow-black/10">
                    <h2 className="text-xl md:text-2xl text-orange-600 font-semibold">Rs 25,000/<span className="text-base md:text-lg font-medium">Month</span> </h2>
                    <h2 className="text-xl md:text-3xl hover:text-orange-600 font-semibold py-2 cursor-default">The OG Old Villa</h2>
                    <p className="text-gray-500 text-sm md:text-base">Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood</p>
                    <div className="flex justify-between py-3 text-gray-500 text-sm md:text-base">
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>3</p>
                                <IoBedOutline></IoBedOutline>
                            </div>
                            <p>Bedrooms</p>
                        </div>
                        <div className="pr-5 border-r-2 border-gray-300">
                            <div className="flex items-center gap-2">
                                <p>2</p>
                                <BiBath></BiBath>
                            </div>
                            <p>Bathrooms</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p>3450</p>
                                <FaRegSquareFull></FaRegSquareFull>
                            </div>
                            <p>Square Ft</p>
                        </div>
                    </div>
                    <hr className="text-gray-300" />
                    <div className="flex items-center justify-between py-3">
                        <div>
                            <h4 className="font-bold md:text-lg hover:text-orange-600 cursor-default">Ramesh</h4>
                            <p className="text-gray-500 text-sm md:text-base">Estate Agents</p>
                        </div>
                        <div className="flex items-center gap-3 text-lg">
                            <div className="bg-gray-200 p-2 hover:bg-amber-300 hover:text-white cursor-pointer">
                                <PiCaretUpDownBold className="box-content"></PiCaretUpDownBold>
                            </div>
                            <div className="bg-gray-200 p-1 hover:bg-amber-300 text-gray-500 hover:text-white cursor-pointer" onClick={() => toggleLike(5)}>
                                {liked[5] ? <i className="fa-solid fa-heart text-red-500"></i> : <i className="fa-regular fa-heart"></i>}
                            </div>
                            <div className="bg-gray-200 p-2 hover:bg-amber-500 hover:text-white cursor-pointer">
                                <CiCirclePlus className="box-content" onClick={() => addToCart(property6)}></CiCirclePlus>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default Property