const api = axios.create({
  baseURL: 'https://products-backend-o5lx.onrender.com/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;

