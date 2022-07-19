const initItemState = {
  country: [],
};
const countryReducer = (state = initItemState, action) => {
  if (action.type === "SET_COUNTRY") {
    return {
      ...state,
      country: action.payload,
    };
  }
  return state;
};

export default countryReducer;
