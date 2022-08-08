import axiosInstance from '../api-instance';

export const profileAPI = {
  getUser(id) {
    return axiosInstance.get(`profile/${id}`);
  },
};
