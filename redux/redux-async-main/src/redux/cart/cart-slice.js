import { createSlice } from "@reduxjs/toolkit";
import { addProduct, removeProduct, getProducts } from "./cart-operations";

const initialState = { items: [], error: null, loading: false };

const pending = (store) => ({
  ...store,
  loading: true,
  error: null,
});
const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [addProduct.pending]: pending,
    [removeProduct.pending]: pending,
    [getProducts.pending]: pending,

    [addProduct.rejected]: rejected,
    [removeProduct.rejected]: rejected,
    [getProducts.rejected]: rejected,

    [addProduct.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: [...store.items, payload],
    }),

    [removeProduct.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: store.items.filter((el) => el.id !== payload.id),
    }),
    [getProducts.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload,
    }),
  },
});

export default cartSlice.reducer;
