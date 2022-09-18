import { axiosRequestConfiguration } from "./axiosRequest.config";

test("Should return a axiosRequesConfiguration", () => {
  const expectResult = {
    baseURL: "https://pokeapi.co/api/v2/",
    responseType: "json",
    headers: {
      "Content-Type": "application/json",
    },
  };
  expect(axiosRequestConfiguration).toEqual(expectResult);
});
