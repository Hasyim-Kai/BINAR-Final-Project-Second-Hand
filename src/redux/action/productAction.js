import productAPI from "../../services/api/productAPI";

export const getAllProduct = () => (dispatch) => {
  productAPI
    .getAll()
    .then((res) => {
      dispatch({
        type: "SET_PRODUCT_LIST",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const PostProduct = () => (dispatch) => {
  productAPI
    .PostProduct()
    .then((res) => {
      dispatch({
        type: "SET_ADD_PRODUCT",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
      alert("ADD_PRODUCT_FAIL")
    });
};
