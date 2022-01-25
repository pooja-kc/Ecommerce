import React from "react";
import "./Cart.css";
import products from "../Products/products";
import { MdBookmark } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { connect, useStore } from "react-redux";
import store from "../../redux/store";
import {productAddedToCart,productRemovedFromCart,productClearedFromCart,productAdded} from "../../redux/actions";

interface Props {
  products: {
    id: number;
    img: string;
    saved: boolean;
    price: number;
    quantity: number;
    title: string;
  }[];
}

function Cart({products}:Props) {


    const removeFromCart = (value: number) => () => {
        console.log(value);
        store.dispatch(productRemovedFromCart(value));
      };
      const addToCart = (value: number) => () => {
        console.log(value);
        store.dispatch(productAddedToCart(value));
      };
      const clearFromCart = (value: number) => () => {
        console.log(value);
        store.dispatch(productClearedFromCart(value));
      };
      const handleClick = (value: number) => () => {
        console.log(value);
        store.dispatch(productAdded(value));
        store.dispatch(productClearedFromCart(value));
      };
      function getCartLength(){
          let count={
              cart:0,
              quantity:0,
              cost:0,
          };
          products.map((ele)=>{
                (ele.quantity>0) && ++count.cart;
                count.quantity= count.quantity+ ele.quantity;
                count.cost = count.cost + (ele.quantity * ele.price);
          })
          return count;
      }
 
  return (
    <div className="cart_wrapper">
      <h2>Cart({getCartLength().cart}) Total Items({getCartLength().quantity}) </h2>
      <div className="cart_products">
        {products.map((product, index) => (
          (products[index].quantity >0) &&  <div key={index}className="cart_product">
            <div>
              <img src={products[index].img} alt="product-image" />
            </div>
            <div>{products[index].title}</div>
            <div>₹ {products[index].price}</div>
            <div>quantity({products[index].quantity})</div>

            <div className="cart_buttons">
              <div className="add_btn" onClick={addToCart(products[index].id)}>
                <a>+</a>
              </div>
              <div className="sub_btn" onClick={removeFromCart(products[index].id)}>
                <a>-</a>
              </div>
              <div className="remove_from_cart_btn" onClick={clearFromCart(products[index].id)}>
                <a>
                  <BiTrash />
                </a>
              </div>
              <div className="add_to_saved_btn" onClick={handleClick(products[index].id)}>
                <a>
                  <MdBookmark />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart_footer">
        {" "}
        <h1>Total Price: ₹ {getCartLength().cost}</h1>
        <h3> Clear Cart</h3>
        <h3> Proceed to Buy</h3>
      </div>
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
}) => {
  return {
    products: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
