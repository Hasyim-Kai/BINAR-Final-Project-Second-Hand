import * as dataAPI from "../../services/api/dataAPI";

export const countryAction = () => (dispatch) => {
  dataAPI
    .country()
    .then((res) => {
      console.log("isi country action");
      dispatch({ type: "SET_COUNTRY", payload: res.data.data });
    })
    .catch((err) => console.log(err));
};
