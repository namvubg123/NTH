import axios from '../api/request';

export const addItemToCart = (value) => {
  return axios.post(`/cart/addItem`, value);
};
export const getCart = () => {
  return axios.get(`/cart/getItem`);
};
export const emptyCart = () => {
  return axios.delete(`/cart/empty-cart`);
};
