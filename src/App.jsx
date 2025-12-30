import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Service from "./component/Service"
import Property from "./component/Property"
import Aminities from "./component/Aminities"
import Blog from "./component/Blog"
import Contact from "./component/Contact"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Cart from "./component/Cart"
import NotFound from "./component/NotFound"
import Loading from "./component/Loading"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (<Loading></Loading>)
  }


  return (<BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      <Route path="/property" element={<Property></Property>}></Route>
      <Route path="/aminities" element={<Aminities></Aminities>}></Route>
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App