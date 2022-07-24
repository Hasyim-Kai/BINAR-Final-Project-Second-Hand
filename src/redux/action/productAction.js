import * as productAPI from "../../services/api/productAPI";
import { setLoading } from "./globalAction";

export const getAllProduct = () => (dispatch) => {
  dispatch(setLoading(true));
  productAPI
    .getAll()
    .then((res) => {
      dispatch({
        type: "SET_PRODUCT_LIST",
        payload: res.data.data,
      });
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSellerProduct = () => (dispatch) => {
  productAPI
    .getMyProduct()
    .then((res) => {
      dispatch({
        type: "SET_MY_PRODUCT_LIST",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProduct = (id) => (dispatch) => {
  productAPI
    .getDetailProduct(id)
    .then((res) => {
      dispatch({
        type: "SET_PRODUCT_DETAIL",
        payload: res?.data?.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddNewProduct = (data, navigate, callback) => (dispatch) => {
  productAPI
    .add(data)
    .then((res) => {
      navigate("/offer/?isAddProductSuccess=true");
    })
    .catch((err) => {
      console.log(err);
      callback("ADD PRODUCT FAIL! " + err.response.data.message);
    });
};

export const publishProduct = (id, navigate) => (dispatch) => {
  productAPI
    .publishProduct(id, { published: true })
    .then((res) => {
      navigate("/offer/?isAddPublishProductSuccess=true");
    })
    .catch((err) => {
      console.log(err);
      alert("PUBLISH PRODUCT FAIL! " + err.response.data.message);
    });
};

export const previewProduct = (id, navigate) => (dispatch) => {
  productAPI
    .previewProduct(id, { published: true })
    .then((res) => {
      console.log(res);
      navigate("/offer/?isAddProductSuccess=true");
    })
    .catch((err) => {
      console.log(err);
      alert("PUBLISH PRODUCT FAIL");
    });
};
