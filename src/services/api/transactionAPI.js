import axios from "axios";

const token = localStorage.getItem("user:token");
let config = { headers: { Authorization: "Bearer " + token } };

const postAll = (id, postData) => {
  return axios.post(
    `https://second-hand-kelompok-5.herokuapp.com/api/transaction/id/${id}`,
    postData,
    config
  );
};

const transactionByCurrentUser = () => {
  return axios.get(
    "https://second-hand-kelompok-5.herokuapp.com/api/transaction/myproduct",
    config
  );
};

const soldProductByCurrentUser = () => {
  return axios.get(
    "https://second-hand-kelompok-5.herokuapp.com/api/transaction/myproduct/sold",
    config
  );
};

const acceptOrRefuseTransaction = (id, isAccept) => {
  return axios.put(
    `https://second-hand-kelompok-5.herokuapp.com/api/transaction/terima/id/${id}`,
    isAccept,
    config
  );
};

const successOrCancelTransaction = (id, isSold) => {
  return axios.put(
    `https://second-hand-kelompok-5.herokuapp.com/api/transaction/id/${id}`,
    isSold,
    config
  );
};

const getSellerNotification = () => {
  return axios.get(
    "https://second-hand-kelompok-5.herokuapp.com/api/notification/seller",
    config
  );
};

const getBuyerNotification = () => {
  return axios.get(
    "https://second-hand-kelompok-5.herokuapp.com/api/notification/buyer",
    config
  );
};
export {
  postAll,
  transactionByCurrentUser,
  soldProductByCurrentUser,
  acceptOrRefuseTransaction,
  successOrCancelTransaction,
  getSellerNotification,
  getBuyerNotification,
};
