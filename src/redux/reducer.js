import products from "../components/Products/products";
import { PRODUCT_SAVED } from "./actionTypes";
import * as actions from './actionTypes';

export default function allProducts(state =products, action){
    console.log('state from store', state);
    switch(action.type){
        case actions.PRODUCT_SAVED:
            return state.map(product => product.id !== action.payload.id ? product: {...product, saved:!product.saved})
        default:
            return state;

    }
}
let lastId=0;
export function allUsers(state=[], action){
    console.log('state from store', state);
    switch (action.type) {
        case actions.USER_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    userName: action.payload.name,
                    email: action.payload.email,
                    password: action.payload.password,
                    isLogged:true,
                }
            ];
    
        default:
            return state;
    }
}

export function currentUser(state=[], action){
    console.log("current user", state);
    switch (action.type) {
        case actions.CURRENT_USER_Added:
            return [
                action.payload
            ]
        default:
            return state
    }
}
export function cart(state=products, action){
    console.log("cart", state);
    switch (action.type) {
        case actions.PRODUCT_ADDED:
            return state.map(product => product.id !== action.payload.id ? product: {...product, quantity:++product.quantity})
        case actions.PRODUCT_REMOVED:
            return state.map(product => product.id !== action.payload.id ? product: {...product, quantity:--product.quantity})
        case actions.PRODUCT_CLEARED:
            return state.map(product => product.id !== action.payload.id ? product: {...product, quantity:0})
        case actions.CART_CLEARED:
            return state.map(product => product.quantity === 0 ? product: {...product, quantity:0});

    
        default:
            return state
    }
}