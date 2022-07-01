import axios from "axios";

export default {
  country: (data) =>
    axios.get(
      `https://second-hand-kelompok-5.herokuapp.com/api/data/kota?search=${data}`
    ),
};
