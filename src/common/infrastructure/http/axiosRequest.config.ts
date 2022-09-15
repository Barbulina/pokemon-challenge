import { AxiosRequestConfig } from "axios";

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: "https://pokeapi.co/api/v2/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};
