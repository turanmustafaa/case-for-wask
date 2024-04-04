
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
      config.headers.token = `${import.meta.env.VITE_APP_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
