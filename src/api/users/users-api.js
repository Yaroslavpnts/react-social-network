import axiosInstance from '../api-instance.js';

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
};
