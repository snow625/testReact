import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    add: (store, { payload }) => {
      const isProductInCart = store.find((el) => el.id === payload.id);
      if (isProductInCart) {
        const newQuantity = isProductInCart.quantity + 1;
        isProductInCart.quantity = newQuantity;
      } else {
        store.push({ ...payload, quantity: 1 });
      }
    },

    remove: (store, { payload }) => store.filter(({ id }) => id !== payload),
    incrementQuantity: (store, { payload }) => {
      const element = store.find((el) => el.id === payload);
      element.quantity += 1;
    },
    decrementQuantity: (store, { payload }) => {
      const index = store.findIndex((el) => el.id === payload);
      store[index].quantity -= 1;
      if (store[index].quantity < 1) {
        store.splice(index, 1);
      }
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  productSlice.actions;

export default productSlice.reducer;
