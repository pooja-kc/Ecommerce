import {createStore,combineReducers} from 'redux';
import allProducts, {allUsers,currentUser, cart} from './reducer';


const store = createStore(combineReducers({allProducts, allUsers,currentUser, cart}));

export default store;