import axios from "axios";

const token = localStorage.getItem("user:token");
let config = { headers: { Authorization: "Bearer " + token } };

export default {
  postAll: (id, postData) =>
    axios.post(
      `https://second-hand-kelompok-5.herokuapp.com/api/transaction/id/${id}`,
      postData,
      config
    ),

  transactionByCurrentUser: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/transaction/myproduct",
      config
    ),

    soldProductByCurrentUser: () =>
    axios.get(
      "https://second-hand-kelompok-5.herokuapp.com/api/transaction/myproduct/sold",
      config
    ),
};
