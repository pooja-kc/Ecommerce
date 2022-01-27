import * as actions from './actionTypes'

export function productAdded(value){
 return {
    type:actions.PRODUCT_SAVED,
    payload:{id:value}
  }
}
export function userAdded(user){
    return{
        type: actions.USER_ADDED,
        payload:{
            name: user.name,
            email:user.email,
            address:user.address,
            password: user.password,
        }
    }
}
export function currentUserAdded(user){
    return{
        type: actions.CURRENT_USER_Added,
        payload:{
            name: user.name,
            email:user.email,
            address:user.address,
        }
    }
}
export function productAddedToCart(product){
    return{
        type: actions.PRODUCT_ADDED,
        payload:{
            id: product
        }
    }
}
export function productRemovedFromCart(product){
    console.log("from remove", product)
    return{
        
        type: actions.PRODUCT_REMOVED,
        payload:{
            id:product,
        }
    }
}
export function productClearedFromCart(product){
    return{
        type: actions.PRODUCT_CLEARED,
        payload:{
            id:product
        }
    }
}
export function cartCleared(){
    return{
        type: actions.CART_CLEARED,
    }
}