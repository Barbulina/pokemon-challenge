import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { axiosRequestConfiguration } from "./axiosRequest.config";

const axiosInstance = (config: AxiosRequestConfig): AxiosInstance => {
  return axios.create(config);
};

const http = axiosInstance(axiosRequestConfiguration);

export default http;
