const initGlobalState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  messageError: "Something went wrong",
  messageSuccess: "successfully",
};

export const globalReducer = (state = initGlobalState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        isError: action.payload,
        messageError: action.message,
      };
    case "SET_SUCCESS":
      return {
        ...state,
        isSuccess: action.payload,
        messageSuccess: action.message,
      };
    default:
      return state;
  }
};

export default globalReducer;
