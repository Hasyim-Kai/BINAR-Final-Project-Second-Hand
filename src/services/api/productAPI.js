import axios from "axios";

const token = localStorage.getItem("user:token");
let config = { headers: { Authorization: "Bearer " + token } };

export default {
  getAll: () =>
    axios.get("https://second-hand-kelompok-5.herokuapp.com/api/product"),
  getMyProduct: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/product/myproduct",
      config
    ),
  getDetailProduct: (id) =>
    axios.get(
      `https://second-hand-kelompok-5.herokuapp.com/api/product/id/${id}`,
      config
    ),
  add: (postData) =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/product",
      postData,
      config
    ),
    preview: () =>
    axios.post(
      "https://second-hand-kelompok-5.herokuapp.com/api/product/publish/id/${id}",
      config
    ),
  publishProduct: (id, isPublish) =>
    axios.put(
      `https://second-hand-kelompok-5.herokuapp.com/api/product/publish/id/${id}`,
      isPublish, config
    ),
};
