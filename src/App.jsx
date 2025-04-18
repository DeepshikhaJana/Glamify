import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';
import { ToastContainer, toast } from 'react-toastify';


function App() {
 
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
