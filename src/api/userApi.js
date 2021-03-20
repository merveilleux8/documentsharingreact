import { Fetch } from "./Fetch";

const baseUrl = "http://localhost:50749/api/userendpoint";

export function getUsers() {
  const requestOptions = {
    method: "GET",
  };
  return Fetch(baseUrl, requestOptions);
}
