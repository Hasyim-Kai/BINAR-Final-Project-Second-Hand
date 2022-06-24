import users from "../../services/api/users";

export const LoginAction = (data, navigate, callback) => (dispatch) => {
  if (data.password.length < 6) {
    callback();
    return;
  }
  users
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
