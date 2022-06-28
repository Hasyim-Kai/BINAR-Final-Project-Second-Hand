const initialState = {
    productList: []
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCT_LIST":
        return {
          ...state,
          productList: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  