import { axiosRequestConfiguration } from "./axiosRequest.config";

test("Should return a axiosRequesConfiguration", () => {
  const expectResult = {
    baseURL: "http://localhost:8080",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  };
  expect(axiosRequestConfiguration).toEqual(expectResult);
});
