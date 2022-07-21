import axios from "axios";
const country = () => {
  return axios.get(
    `https://second-hand-kelompok-5.herokuapp.com/api/data/kota?search=`
  );
};

export { country };
