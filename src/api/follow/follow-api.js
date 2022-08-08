import axiosInstance from '../api-instance';

export const followAPI = {
  async follow(id) {
    return await axiosInstance.post(`follow/${id}`);
  },

  unfollow(id) {
    return axiosInstance.delete(`follow/${id}`);
  },
};
