const initialState = {
    productList: [],
    sellerProductList: [],
    dataAddProduct:[]
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCT_LIST":
        return {
          ...state,
          productList: action.payload,
        };

        case "SET_MY_PRODUCT_LIST":
          return {
            ...state,
            sellerProductList: action.payload,
          };
          case "SET_ADD_PRODUCT":
      return {
        ...state,
        dataAddProduct: action.payload,
      };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  