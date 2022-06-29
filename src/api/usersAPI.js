import axios from "axios";

const token = localStorage.getItem("user:token");
export default {
  login: (credentials) =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/login",
      credentials
    ),
  register: (credentials) =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/register",
      credentials
    ),
  getProfile: () =>
    axios.get("https://second-hand-kelompok-5.herokuapp.com/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
