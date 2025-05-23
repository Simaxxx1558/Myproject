import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://25.36.3.63/api' // Замените на ваш IP
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  login(credentials) {
    return apiClient.post('/auth/login', credentials);
  },
  getClients() {
    return apiClient.get('/clients');
  }
};