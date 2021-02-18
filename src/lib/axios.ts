import axios from "axios";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000, // ms
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
