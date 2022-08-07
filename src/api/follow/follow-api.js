import axiosInstance from '../api-instance';

export const followAPI = {
  async follow(id, cbFnfollow) {
    const response = await axiosInstance.post(`follow/${id}`);

    if (response.data.resultCode === 0) {
      cbFnfollow(id);
    }
  },

  async unfollow(id, cbFnunfollow) {
    const response = await axiosInstance.delete(`follow/${id}`);

    if (response.data.resultCode === 0) {
      cbFnunfollow(id);
    }
  },
};
