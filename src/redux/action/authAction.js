import * as usersAPI from "../../services/api/usersAPI";
import JwtDecode from "../../utility/JwtDecode";
import { setLoading } from "./globalAction";

const token = localStorage.getItem("user:token");

export const LoginAction = (data, navigate, callback) => (dispatch) => {
  if (data.password.length >= 6) {
    usersAPI
      .login(data)
      .then((res) => {
        localStorage.setItem("user:token", res.data.data);
        dispatch({
          type: "SET_DATA_LOGIN",
          payload: JwtDecode(res.data.data),
        });
        navigate("/");
        window.location.reload(false);
      })
      .catch((err) => {
        callback(err.response.data.message);
      });
  } else {
    callback("Password must 6 character");
    return;
  }
};

export const RegisterAction = (data, navigate, callback) => (dispatch) => {
  if (data.password.length >= 6) {
    usersAPI
      .register(data)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "SET_DATA_REGISTER",
          payload: data,
        });
        navigate("/login", { state: res });
      })
      .catch((err) => {
        console.log(err);
        callback(err.response.data.message);
      });
  } else {
    callback("Password must 6 character");
  }
};

export const GetProfile = (token) => (dispatch) => {
  dispatch(setLoading(true));
  usersAPI
    .getProfile(token)
    .then((res) => {
      dispatch({
        type: "SET_DATA_GET_PROFILE",
        payload: res?.data?.data,
      });
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UpdateProfile =
  ({ form, selectedFile, navigate }) =>
  (dispatch) => {
    const formdata = new FormData();
    formdata.append("name", form.name);
    formdata.append("phone_number", form.phone_number);
    formdata.append("address", form.address);
    formdata.append("profile_pict", selectedFile);
    formdata.append("city_id", form.city_id);

    usersAPI
      .updateProfile(formdata, token)
      .then((res) => {
        console.log(res.data.data);
        dispatch({
          type: "SET_DATA_GET_PROFILE",
          payload: res?.data?.data,
        });
      })
      .catch((err) => console.log(err));
  };
