import React from 'react';
import './App.css';
import Product from './components/Products/Product';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Saved from './components/Saved/Saved';
import  Profile from './components/Profile/Profile'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaCartPlus} from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import store from './redux/store';
import error from './components/error/error';
import { connect, useStore } from "react-redux";


interface Props {
  products: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
    quantity: number;
    title: string;
  }[];
  allProducts: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
  }[];
}



function App({products, allProducts}:Props) {
  function getCartLength(){
    let count={
        cart:0,
        saved:0,
    };
    products.map((ele)=>{
          (ele.quantity>0) && ++count.cart;
    })
    allProducts.map((ele)=>{
      (ele.saved) && ++count.saved;
    })
    return count;
}
  return (
    <div className="App">
      <header className="App-header">
        <Router>
      <div className="navbar">
        <div className="Logo">  <Link to="/"><h5> Ecommerce </h5></Link></div>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login" >Logout</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
          <Link to="/cart">
            {(getCartLength().saved)?<div className='badget1'>{getCartLength().saved}</div>: ''}
            <FaCartPlus />
            </Link>
            </li>
            <li>
            <Link to="/save">
            {(getCartLength().cart)? <div className='badget2'>{getCartLength().cart}</div>: ''}
            <MdBookmarkBorder />
            </Link>
            </li>
          
        </div>
      </div>

      <Routes>
        <Route  path="/" element={<Product />} />
        <Route  path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/save" element={<Saved />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
      
      </header>
    </div>
  );
}

const mapStateToProps = (state: {
  cart: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
    quantity: number;
    title: string;
  }[];
  allProducts: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
  }[];
}) => {
  return {
    products: state.cart,
    allProducts: state.allProducts
  };
};

export default connect(mapStateToProps)(App);
