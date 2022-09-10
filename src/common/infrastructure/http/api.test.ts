import { axiosRequestConfiguration } from "./axiosRequest.config";
import http from "./api";

test("Should return a api instance", () => {
  expect(http.defaults.baseURL).toEqual(axiosRequestConfiguration.baseURL);
});
