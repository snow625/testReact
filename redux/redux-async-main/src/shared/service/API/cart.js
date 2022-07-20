import axios from "axios";

const instance = axios.create({
  baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/carts",
});

export async function postProduct(product) {
  const { data: result } = await instance.post("/", product);
  return result;
}

export async function deleteProduct(id) {
  const { data } = await instance.delete(`/${id}`);
  return data;
}

export async function getProductsList() {
  const { data } = await instance.get("/");
  return data;
}
