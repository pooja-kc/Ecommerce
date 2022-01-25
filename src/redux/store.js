import {createStore,combineReducers} from 'redux';
import allProducts, {allUsers,currentUser} from './reducer';


const store = createStore(combineReducers({allProducts, allUsers,currentUser}));

export default store;