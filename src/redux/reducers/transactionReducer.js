const initialDataState = {
  interestData: [],
  soldData: []
};



const interestReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case "SET_INTEREST_LIST":
      return {
        ...state,
        interestData: action.payload,
      };
  }
  return state;
};

export default interestReducer;
