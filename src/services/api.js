// src/services/api.js
import axios from "axios";

/**
 * Central axios instance for the frontend.
 * - Uses REACT_APP_API_URL (create .env.local with REACT_APP_API_URL=http://127.0.0.1:8000)
 * - Attaches Authorization header if token is present in localStorage
 * - Exports instance for all services
 */

const baseURL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: response interceptor (handle 401 globally)
api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status === 401) {
      // optionally: remove token and redirect to login
      localStorage.removeItem("auth_token");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
