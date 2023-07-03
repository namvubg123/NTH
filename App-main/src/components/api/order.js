import axios from '../api/request';

export const createOrder = (value) => {
  return axios.post(`/history/create`, value);
};
export const getAllOrders = () => {
  return axios.get(`history/order`);
};
export const updateOrderStatus = (id) => {
  return axios.put(`/history/update/${id}`);
};
export const getOrderById = (id) => {
  return axios.delete(`/history/${id}`);
};
