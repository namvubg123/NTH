import axios from '../api/request';

export const createCategory = (value) => {
  return axios.post(`/category/create`, value);
};
export const getCategory = () => {
  return axios.get(`/category/get`);
};
export const updateCategories = (value) => {
  return axios.post(`/category/update`, value);
};
export const deleteCategories = (id) => {
  return axios.delete(`/category/delete/${id}`);
};
