import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '../views/Home'
import Layout from '../components/Layout'
import FilteredProducts from '../views/FilteredProducts'
import ProductDetail from '../views/ProductDetail'
import CartView from '../views/CartView'

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>} >
                <Route index element={<Home/>}/>
                <Route path='/category/:category' element={<FilteredProducts/>}/>
                <Route path='/item/:id' element={<ProductDetail/>}></Route>
                <Route path='/cart' element={<CartView/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas