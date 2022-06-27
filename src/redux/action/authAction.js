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

export const RegisterAction = (data, callback) => (dispatch) => {
  if (data.password.length > 6) {
    users.register(data).then((res) => {
      callback();
      console.log(res)
      dispatch({
        type: "SET_DATA_REGISTER",
        payload: data
      });
    }).catch((err) => {
      console.log(err)
      console.log(err.request.response)
      alert("Register Failed");
    });
  } else {
    alert("Password Below 6 Characters");
  }
};
