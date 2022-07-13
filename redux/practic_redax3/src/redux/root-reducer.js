import { combineReducers } from "redux";
import productsReducer from "./products/productsSlice";

const rootReducer = combineReducers({
    products: productsReducer,
})


export default rootReducer;

// import { ADD_PRODUCT, REMOVE_PRODUCT} from './types';

// const initialStore = [];

// function rootReducer(store = initialStore, { type, payload }) {
//     switch (type) {
//         case ADD_PRODUCT:
//             return [...store, payload];
//         case REMOVE_PRODUCT:
//             return store.filter(el => el.id !== payload.id);

//         default: return store;
//     }
    
// }