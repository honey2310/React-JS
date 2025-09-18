import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Cart from './Components/Cart/Cart'
import Contact from './Components/Contact/Contact'
import { PetProducts } from "./Json/db";

export default function App() {

  const [CartList, setCartList] = useState([]);
  console.log(CartList)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home setCartList={setCartList} PetProducts={PetProducts}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart CartList={CartList} setCartList={setCartList}/>} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
