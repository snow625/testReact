import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  postProduct,
  deleteProduct,
  getProductsList,
} from "../../shared/service/API/cart";

const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        return await request(data);
      } catch (error) {
        return rejectWithValue(error);
      }
    },
    { condition }
  );
};

export const addProduct = createOperation(
  "cart/add",
  postProduct,
  (data, { getState }) => {
    const { cart } = getState();
    const isInclude = cart.items.find((el) => el.name === data.name);
    if (isInclude) {
      alert(`${data.name} you have in the cart`);
      return false;
    }
  }
);

export const removeProduct = createOperation("cart/remove", deleteProduct);

export const getProducts = createOperation("cart/get", getProductsList);
