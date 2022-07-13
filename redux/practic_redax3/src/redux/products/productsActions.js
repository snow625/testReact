import { createAction } from '@reduxjs/toolkit';

export const addProduct = createAction('products/add');
export const removeProduct = createAction('products/remove');


// import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

// export function addProduct(payload) {
//     return {
//         type: ADD_PRODUCT,
//         payload,
//     }
// }
// export function removeProduct(payload) {
//     return {
//         type: REMOVE_PRODUCT,
//         payload,
//     }
// }