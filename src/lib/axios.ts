import axios from "axios";

export const data = process.env.BASE_URL;
export const axiosInstance = axios.create({
  baseURL: data,
});
