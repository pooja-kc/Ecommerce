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