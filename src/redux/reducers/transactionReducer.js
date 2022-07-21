const initialDataState = {
  interestDetailData: {},
  interestData: [],
  soldData: [],
  sellerNotification: {},
  buyerNotification: {},
};

const interestReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case "SET_INTEREST_DETAIL":
      return {
        ...state,
        interestDetailData: action.payload,
      };
    case "SET_INTEREST_LIST":
      return {
        ...state,
        interestData: action.payload,
      };
    case "SET_SOLD_LIST":
      return {
        ...state,
        soldData: action.payload,
      };
    case "SET_SELLER_NOTIF":
        return {
          ...state,
          sellerNotification: action.payload,
        };
    case "SET_BUYER_NOTIF":
        return {
          ...state,
          buyerNotification: action.payload,
        };
    default:
      return state;  
  }
};

export default interestReducer;
