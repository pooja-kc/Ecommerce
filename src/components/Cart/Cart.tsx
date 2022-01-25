import React from 'react';
import './Cart.css'
import products from '../Products/products';
import { MdBookmark } from "react-icons/md";
import { BiTrash } from "react-icons/bi";


export default function Cart() {
  return <div className='cart_wrapper'>
      <h2>Cart(3) Total Items(6) </h2>
      <div className='cart_products'>
          <div className='cart_product'>
              <div>
                  <img src={products[3].img} alt="product-image"  />
              </div>
              <div>
                  name
              </div>
              <div>
              ₹ 3000
              </div>
              <div>
                  quantity(2)
              </div>

              <div className='cart_buttons'>
                  <div className='add_btn'>
                      <a>+</a>
                  </div>
                  <div className='sub_btn'>
                      <a>-</a>
                  </div>
                  <div className='remove_from_cart_btn'>
                      <a><BiTrash /></a>
                  </div>
                  <div className='add_to_saved_btn'>
                      <a>< MdBookmark/></a>
                  </div>
              </div>
          </div>
          <div className='cart_product'>
              <div>
                  <img src={products[5].img} alt="product-image"  />
              </div>
              <div>
                  name
              </div>
              <div>
                  price
              </div>
              <div>
                  quantity
              </div>

              <div className='cart_buttons'>
                  <div className='add_btn'>
                      <a>+</a>
                  </div>
                  <div className='sub_btn'>
                      <a>-</a>
                  </div>
                  <div className='remove_from_cart_btn'>
                      <a><BiTrash /></a>
                  </div>
                  <div className='add_to_saved_btn'>
                      <a>< MdBookmark/></a>
                  </div>
              </div>
          </div>
          <div className='cart_product'>
              <div>
                  <img src={products[11].img} alt="product-image"  />
              </div>
              <div>
                  name
              </div>
              <div>
                  price
              </div>
              <div>
                  quantity
              </div>

              <div className='cart_buttons'>
                  <div className='add_btn'>
                      <a>+</a>
                  </div>
                  <div className='sub_btn'>
                      <a>-</a>
                  </div>
                  <div className='remove_from_cart_btn'>
                      <a><BiTrash /></a>
                  </div>
                  <div className='add_to_saved_btn'>
                      <a>< MdBookmark/></a>
                  </div>
              </div>
          </div>

      </div>
      <div className='cart_footer'> <h1>Total Price: ₹ 12000</h1>
      <h3> Clear Cart</h3>
      <h3> Proceed to Buy</h3>
      </div>
     

  </div>;
}
