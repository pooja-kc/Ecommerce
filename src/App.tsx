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



function App() {
  console.log('store:', store.getState());
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
            <div className='badget1'>1</div>
            <FaCartPlus />
            </Link>
            </li>
            <li>
            <Link to="/save">
            <div className='badget2'>1</div>
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

export default App;
