import productAPI from "../../services/api/productAPI";

export const getAllProduct = () => (dispatch) => {
    productAPI.getAll().then((res) => {    
      dispatch({
        type: "SET_PRODUCT_LIST",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
