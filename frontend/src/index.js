import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import MyOrders from './pages/MyOrders'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import BlogPage from './pages/BlogPage'
import BlogsPage from './pages/BlogsPage'
import Help from './pages/Help'
import LoyaltyPoints from './pages/LoyaltyPoints'
import Profile from './pages/Profile'
import Returns from './pages/Returns'
import Shipping from './pages/Shipping'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/wishlist" element={<WishList/>} />
            <Route path='/blog' element={<BlogPage/>} />
            <Route path='/blogs' element={<BlogsPage />} />
            <Route path='/help' element={<Help />} />
            <Route path='/loyalty' element={<LoyaltyPoints />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/returns' element={<Returns />} />
            <Route path='/shipping' element={<Shipping />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

