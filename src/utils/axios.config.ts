import axios from "axios";
import {getToken} from "@/service/AuthService";
import router from "@/router";

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(config => {
  if (!config.url?.endsWith('/api/auth')) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response;
}, error => {
  let message;
  switch (error.response.status) {
    case 401:
      message = 'not authorized';
      router.push('/login');
      break;
    case 403:
      message = 'forbidden';
      break;
    case 404:
      message = 'not found'
      break;
    case 500:
      message = 'Internal Server Error';
      break;
    default:
      message = error.response.data.message;
      break;
  }
  return Promise.reject(message);
})

export default axios;