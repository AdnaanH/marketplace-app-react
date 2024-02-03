import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Homepage from './pages/Homepage'
import Login from './pages/LogIn'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage'
import MyOrders from './pages/MyOrders'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import WishList from './pages/WishList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/wishlist" element={<WishList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

