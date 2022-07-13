import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api', params: {
        limit: 10,
    }
})
export async function getProducts(page = 1) {
    const data = await instance.get('/products');
    return data;
}