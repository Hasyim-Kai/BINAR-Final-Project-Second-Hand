export const Login = (data) => {
  console.log("data telah masuk", data);
  return (dispatch) => {
    dispatch({ type: "SET_DATA_LOGIN", payload: data });
  };
};
export const Register = (data) => {
  console.log("data telah masuk", data);
  return (dispatch) => {
    dispatch({ type: "SET_DATA_REGISTER", payload: data });
  };
};
