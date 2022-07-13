import { createReducer } from "@reduxjs/toolkit";
import { addProduct, removeProduct } from "./productsActions";

const productsReducer = createReducer([], {
    [addProduct]:(store, {payload}) => [...store, payload],
    [removeProduct]: (store, { payload }) =>  store.filter(({ id }) => id !== payload),
})

export default productsReducer;

//push 
//splice