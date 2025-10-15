import axios from "axios";

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? "https://your-backend-domain.com/api" // Replace with your deployed backend URL
    : "http://localhost:8080/api", // Spring Boot backend for development
  headers: {
    "Content-Type": "application/json"
  }
});

// Add request interceptor to handle network errors gracefully
api.interceptors.response.use(
  response => response,
  error => {
    // If backend is not available, return a mock error that won't crash the app
    if (error.code === 'ERR_NETWORK' || error.code === 'ECONNREFUSED') {
      console.warn('Backend API not available, falling back to demo data');
      return Promise.reject({ 
        message: 'Backend not available',
        fallbackToDemo: true 
      });
    }
    return Promise.reject(error);
  }
);

export default api;
