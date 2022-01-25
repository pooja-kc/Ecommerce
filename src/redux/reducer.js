import products from "../components/Products/products";

export default function reducer(state =products, action){
    console.log('state from store', state);
    switch(action.type){
        case 'productsSaved':
            return state.map(product => product.id !== action.payload.id ? product: {...product, saved:!product.saved})
        default:
            return state;

    }
}
