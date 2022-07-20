import { combineReducers } from "redux";
import cartReducer from "./cart/cart-slice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
