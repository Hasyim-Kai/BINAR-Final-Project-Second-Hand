import axios from "axios";

export default {
  country: () =>
    axios.get("https://second-hand-kelompok-5.herokuapp.com/api/data/kota"),
};
