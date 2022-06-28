import axios from "axios";

const token = localStorage.getItem("user:token");
let config = { headers: { Authorization: "Bearer " + token } };

export default {
  getAll: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      config
    ),
  PostProduct: (data) =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      data,
      config
    ),
};
