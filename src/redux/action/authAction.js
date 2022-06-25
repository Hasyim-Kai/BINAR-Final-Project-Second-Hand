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
export const Register = (data,  callback) => (dispatch) => {
  if (data.password.length > 6) {
    callback();
    return;
  } else { 
    alert("Password Below 6 Characters");
  }
  users
  .Register(data)
  .then((res) => {
    dispatch({
      type: "SET_DATA_REGISTER",
      payload: data, res
    });
  })
  .catch((err) => {
    callback();
  });
};
