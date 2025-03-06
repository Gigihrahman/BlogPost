import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://joysomecream-us.backendless.app/api",
});
