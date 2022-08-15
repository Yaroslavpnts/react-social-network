import axiosInstance from '../api-instance';

export const authAPI = {
  authMe() {
    return axiosInstance.get('auth/me');
  },
  logIn(data) {
    return axiosInstance.post('auth/login', data);
  },
};
