import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-app-o9z3.onrender.com",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token")); // Assuming token is stored in localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
