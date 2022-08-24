import axiosInstance from '../api-instance';

export const authAPI = {
  authMe() {
    return axiosInstance.get('auth/me');
  },
  logIn({ email, password, rememberMe = false, captchaUrl: captcha }) {
    return axiosInstance.post('auth/login', { email, password, rememberMe, captcha });
  },
  logOut() {
    return axiosInstance.delete('auth/login');
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return axiosInstance.get('security/get-captcha-url');
  },
};
