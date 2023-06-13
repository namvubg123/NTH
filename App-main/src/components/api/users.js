import axios from '../api/request';

export const getAllUsers = () => {
  return axios.get(`/admin/user`);
};
export const deleteUser = (id) => {
  return axios.get(`/admin/user/${id}`);
};
