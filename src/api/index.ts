import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`
    }
  }
  return config;
});

export const register = async (data: any) => {
  const response = await api.post('/auth/register', data);

  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }

  return response.data;
}

export const login = async (data: any) => {
  const response = await api.post('/auth/login', data);

  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }

  return response.data;
}

export const feed = async () => {
  const response = await api.get('/posts/feed');

  return response.data;
}

export default api;
