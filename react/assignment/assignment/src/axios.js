import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.google.com/",
});

export default instance;

// export async function getUserData({}) {
//   const response = await axios.get(URL_BASE);
//   return response;
// }

// export async function getUserRepositories(userName) {
//   const repositories = await axios.get(`${URL_BASE}/users/${userName}/repos`);
//   return repositories;
// }
