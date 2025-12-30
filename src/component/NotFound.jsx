import React from "react"
import { Link } from "react-router-dom"

function NotFound() {
    return (<div className="flex flex-col justify-center items-center p-5 h-screen bg-gray-200">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-red-500 font-bold">404</h1>
        <h3 className="my-2 text-xl sm:text-2xl lg:text-3xl font-semibold">Page Not Found</h3>
        <p className="mb-2 text-base sm:text-lg font-medium">Sorry, the page you are looking for does not exist</p>
        <Link to={"/"} className="bg-orange-400 mt-1 text-white py-2 px-5 font-semibold rounded hover:bg-orange-600 transition-all duration-500 ease-in-out">Go Back to Home</Link>
    </div>
    )
}

export default NotFound
