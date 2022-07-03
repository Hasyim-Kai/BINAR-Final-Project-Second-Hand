const initGlobalState = {
  isLoading: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  console.log("loading reducer", action.payload);
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  return state;
};

export default globalReducer;
