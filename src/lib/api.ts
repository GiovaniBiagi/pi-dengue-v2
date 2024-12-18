import axios, { AxiosError } from "axios";

export interface Error extends AxiosError {
  message: string;
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default instance;
