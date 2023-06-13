import axios from '../api/request';

export const getProducts = () => {
  return axios.get(`/product/getProduct`);
};

export const getProductById = (id) => {
  return axios.get(`/product/getById/${id}`);
};

export const createProduct = (product) => {
  return axios.post(`/product/create`, product);
};

export const updateProduct = (productId) => {
  return axios.delete(`/product/${productId}`);
};

export const removeProduct = (id) => {
  return axios.delete(`/product/getById/${id}`);
};
