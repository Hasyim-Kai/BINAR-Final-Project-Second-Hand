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
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const AddNewProduct = (data, navigate) => (dispatch) => {
  productAPI
    .add(data)
    .then((res) => {
      if (res.status === "Created") {
        console.log(res);
        navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
      alert("ADD PRODUCT FAIL");
    });
};
