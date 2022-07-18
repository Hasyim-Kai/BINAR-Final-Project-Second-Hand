import * as transactionAPI from "../../services/api/transactionAPI";
import { setSuccess } from "./globalAction";
import { setLoading } from "./globalAction";

// buyer transaction
export const postTransaction = (id, postData) => (dispatch) => {
  console.log(`isi id ${id}, post data ${postData}`);
  transactionAPI
    .postAll(id, postData)
    .then((res) => {
      console.log(res.response);
      dispatch(setSuccess(true, "success adding to wistlist"));
    })
    .catch((res) => {
      console.log(res);
    });
};

// seller interest product
export const interest = () => (dispatch) => {
  dispatch(setLoading(true));
  transactionAPI
    .transactionByCurrentUser()
    .then((res) => {
      dispatch({ type: "SET_INTEREST_LIST", payload: res.data.data });
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};

export const setInterestDetail = (transactinoItem, id) => (dispatch) => {
  dispatch({ type: "SET_INTEREST_DETAIL", payload: transactinoItem });
};

//Seller sold Product
export const soldProduct = () => (dispatch) => {
  dispatch(setLoading(true));
  transactionAPI
    .soldProductByCurrentUser()
    .then((res) => {
      dispatch({ type: "SET_SOLD_LIST", payload: res.data.data });
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};

export const acceptOrRefuseTransaction = (id, acceptOrRefuse) => (dispatch) => {
  transactionAPI
    .acceptOrRefuseTransaction(id, { opsi: acceptOrRefuse })
    .then((res) => {
      // dispatch({ type: "SET_SOLD_LIST", payload: res.data.data });
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const successOrCancelTransaction =
  (id, acceptOrRefuse, navigate) => (dispatch) => {
    transactionAPI
      .successOrCancelTransaction(id, { opsi: acceptOrRefuse === "true" })
      .then((res) => {
        // dispatch({ type: "SET_SOLD_LIST", payload: res.data.data });
        console.log(res);
        navigate("/my-interested");
      })
      .catch((err) => console.log(err));
  };

export const getSellerNotif = () => (dispatch) => {
  transactionAPI
    .getSellerNotification()
    .then((res) => {
      console.log(res.response);
      dispatch({ type: "SET_SELLER_NOTIF", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getBuyerNotif = () => (dispatch) => {
  transactionAPI
    .getBuyerNotification()
    .then((res) => {
      console.log(res.response);
      dispatch({ type: "SET_BUYER_NOTIF", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
