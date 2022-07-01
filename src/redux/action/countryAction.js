import dataAPI from "../../services/api/dataAPI";

export const countryAction = (data) => (dispatch) => {
  console.log(data);
  dataAPI
    .country(data)
    .then((res) => {
      console.log("isi country action");
      dispatch({ type: "SET_COUNTRY", payload: res.data.data });
    })
    .catch((err) => console.log(err));
};
