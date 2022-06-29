import usersAPI from "../../services/api/usersAPI";
import JwtDecode from "../../utility/JwtDecode";

export const LoginAction = (data, navigate, callback) => (dispatch) => {
  if (data.password.length > 6) {
    usersAPI
      .login(data)
      .then((res) => {
        localStorage.setItem("user:token", res.data.data);
        dispatch({
          type: "SET_DATA_LOGIN",
          payload: JwtDecode(res.data.data),
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        callback();
      });
  } else {
    callback();
    return;
  }
};

export const RegisterAction = (data, callback) => (dispatch) => {
  if (data.password.length < 6) {
    usersAPI
      .register(data)
      .then((res) => {
        callback();
        console.log(res);
        dispatch({
          type: "SET_DATA_REGISTER",
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.request.response);
        alert("Register Failed");
      });
  } else {
    alert("Password Below 6 Characters");
  }
};

export const GetProfile = (token) => (dispatch) => {
  usersAPI
    .getProfile(token)
    .then(
      (res) => (
        console.log("isi get profile ", res?.data?.data),
        dispatch({
          type: "SET_DATA_GET_PROFILE",
          payload: res?.data?.data,
        })
      )
    )
    .catch((err) => console.log(err));
};
