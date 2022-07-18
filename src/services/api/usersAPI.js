import axios from "axios";
// const token = localStorage.getItem("user:token");
// let config = { headers: { Authorization: "Bearer " + token } };

const login = (credentials) => {
  return axios.post(
    "https://second-hand-kelompok-5.herokuapp.com/api/login",
    credentials
  );
};

const register = (credentials) => {
  return axios.post(
    "https://second-hand-kelompok-5.herokuapp.com/api/register",
    credentials
  );
};

const getProfile = (token) => {
  return axios.get("https://second-hand-kelompok-5.herokuapp.com/api/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateProfile = (formData, token) => {
  return axios.put(
    "https://second-hand-kelompok-5.herokuapp.com/api/profile",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export { login, register, getProfile, updateProfile };
