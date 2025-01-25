import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost/api/v1/products';

const authHeader = () => ({
    headers: { Authorization: `Bearer ${Cookies.get('authToken')}` }
});

export const getAllProducts = async () => {
    return await axios.get(`${API_URL}/getall`, authHeader());
};

export const createProduct = async (productData) => {
    return await axios.post(`${API_URL}/create`, productData, authHeader());
};

export const updateProduct = async (productData) => {
    return await axios.put(`${API_URL}/update`, productData, authHeader());
};

export const deleteProduct = async (id) => {
    return await axios.delete(`${API_URL}/delete?id=${id}`, authHeader());
};
