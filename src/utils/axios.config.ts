import axios from "axios";
import {getToken, logout} from "@/service/AuthService";

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
  let message = error.response.data.message;
  switch (error.response.status) {
    case 400:
      break;
    case 401:
      logout();
      message = "";
      break;
    case 403:
      break;
    case 404:

      break;
    case 500:
      message = "服务器出错啦";
      break;
    default:
      break;
  }
  console.error(message);
  return Promise.reject(error);
})

export default axios;