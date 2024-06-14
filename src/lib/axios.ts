import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_API_URL,
});

export default axiosInstance;
