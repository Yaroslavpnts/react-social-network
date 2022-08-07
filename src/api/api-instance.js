import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ad530900-a7de-469c-834c-3dfb49ba381e',
  },
});

export default axiosInstance;
