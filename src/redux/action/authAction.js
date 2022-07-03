import usersAPI from "../../services/api/usersAPI";
import JwtDecode from "../../utility/JwtDecode";
const token = localStorage.getItem("user:token");

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

export const RegisterAction = (data, navigate, callback) => (dispatch) => {
  if (data.password.length >= 6) {
    usersAPI
      .register(data)
      .then((res) => {
        callback();
        dispatch({
          type: "SET_DATA_REGISTER",
          payload: data,
        });
        navigate("/login");
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
    .then((res) => {
      // console.log("isi get profile ", res?.data?.data);
      dispatch({
        type: "SET_DATA_GET_PROFILE",
        payload: res?.data?.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UpdateProfile =
  ({ form, selectedFile }) =>
  (dispatch) => {
    console.log("isi action ", form);
    var formdata = new FormData();
    formdata.append("name", form.name);
    formdata.append("phone_number", form.phone_number);
    formdata.append("address", form.address);
    formdata.append("profile_pict", selectedFile);
    formdata.append("city_id", form.city_id);

    usersAPI.updateProfile(formdata, token);
    // .then((res) => console.log(res))
    // .catch((err) => console.log(err));
  };
