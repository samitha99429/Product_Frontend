import axios from 'axios';

const api = axios.create({
  baseURL: 'https://products-backend-o5lx.onrender.com',
  headers: { 'Content-Type': 'application/json' },
});

export default api;
