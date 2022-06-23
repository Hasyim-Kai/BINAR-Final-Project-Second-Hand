import axios from "axios";

export default {
    login: (credentials) => axios.post("https://second-hand-kelompok-5.herokuapp.com/api/login", credentials)
}