import axios from "axios";

const token = localStorage.getItem("user:token");
const config = { headers: { Authorization: "Bearer " + token } };
const getAll = () => {
  return axios.get("https://second-hand-kelompok-5.herokuapp.com/api/product");
};
const getMyProduct = () => {
  return axios.get(
    "https://second-hand-kelompok-5.herokuapp.com/api/product/myproduct",
    config
  );
};
const getDetailProduct = (id) => {
  return axios.get(
    `https://second-hand-kelompok-5.herokuapp.com/api/product/id/${id}`,
    config
  );
};

const add = (postData) => {
  return axios.post(
    "https://second-hand-kelompok-5.herokuapp.com/api/product",
    postData,
    config
  );
};

const previewProduct = (id) => {
  return axios.post(
    `https://second-hand-kelompok-5.herokuapp.com/api/product/publish/id/${id}`,
    config
  );
};
const publishProduct = (id, isPublish) => {
  return axios.put(
    `https://second-hand-kelompok-5.herokuapp.com/api/product/publish/id/${id}`,
    isPublish,
    config
  );
};

export {
  getAll,
  getMyProduct,
  getDetailProduct,
  add,
  previewProduct,
  publishProduct,
};
