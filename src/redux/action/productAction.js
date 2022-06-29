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

export const AddNewProduct = (data, navigate) => (dispatch) => {
  productAPI.add(data).then((res) => {
    if(res.status === "Created"){
        console.log(res);
        navigate("/");
      }}).catch((err) => {
        console.log(err);
        alert("ADD PRODUCT FAIL")
    });
};
