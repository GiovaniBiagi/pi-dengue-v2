import axios, { AxiosError } from "axios";

export interface Error extends AxiosError {
  message: string;
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default instance;
