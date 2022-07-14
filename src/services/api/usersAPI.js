import axios from "axios";
// const token = localStorage.getItem("user:token");
// let config = { headers: { Authorization: "Bearer " + token } };

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
  getProfile: (token) =>
    axios.get("https://second-hand-kelompok-5.herokuapp.com/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  updateProfile: (formData, token) => {
    axios.put(
      "https://second-hand-kelompok-5.herokuapp.com/api/profile",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
  },
};
