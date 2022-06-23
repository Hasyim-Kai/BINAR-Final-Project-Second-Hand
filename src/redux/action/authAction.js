import users from "../../constants/api/users";

export const LoginAction = (data) => (dispatch) => {
  users.login(data).then((res) => {
    console.log("lempar data", res);
    dispatch({
      type: "SET_DATA_LOGIN",
      payload: data,
    });
  });
};
export const Register = (data) => (dispatch) => {
  users.register(data).then((res) => {
    console.log("lempar data", res);
    dispatch({
      type: "SET_DATA_REGISTER",
      payload: data,
    });
  });
};
