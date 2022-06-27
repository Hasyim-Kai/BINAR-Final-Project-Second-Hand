import usersAPI from "../../services/api/usersAPI";

export const LoginAction = (data, navigate, callback) => (dispatch) => {
  if (data.password.length < 6) {
    callback();
    return;
  }
  usersAPI
    .login(data)
    .then((res) => {
      localStorage.setItem("user:token", res.data.data);
      dispatch({
        type: "SET_DATA_LOGIN",
        payload: data,
      });
      navigate("/");
    })
    .catch((err) => {
      callback();
    });
};
export const Register = (data) => {
  console.log("data telah masuk", data);
  return (dispatch) => {
    dispatch({
      type: "SET_DATA_REGISTER",
      payload: data,
    });
  };
};

export const GetProfile = () => (dispatch) => {
  usersAPI
    .getProfile()
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
