import axios from "axios";
const instance = axios.create({
  baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/",
});

export const getProducts = async () => {
  const { data } = await instance.get("/");
  return data;
};

export const getProductByID = async (id) => {
  const { data } = await instance.get(`/${id}`);
  return data;
};
