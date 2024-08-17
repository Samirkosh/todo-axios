import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://29e3d557b332ebd8.mokky.dev",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});
