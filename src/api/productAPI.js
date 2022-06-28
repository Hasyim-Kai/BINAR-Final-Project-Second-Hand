import axios from "axios";

const token = localStorage.getItem("user:token");
let config = { headers: { Authorization: "Bearer " + token } };
//Error
export default {
  getAll: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      config
    ),

  PostProduct: () =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      config
    ),
};
