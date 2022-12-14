const initialState = {
  dataLogin: null,
  dataRegister: null,
  dataGetProfile: {
    name: "",
    city_id: "",
    address: "",
    phone_number: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA_LOGIN":
      return {
        ...state,
        dataLogin: action.payload,
      };

    case "SET_DATA_REGISTER":
      return {
        ...state,
        dataRegister: action.payload,
      };
    case "SET_DATA_GET_PROFILE":
      return {
        ...state,
        dataGetProfile: action.payload,
      };

    // case "SET_DATA_UPDATE_PROFILE":
    //   return {
    //     ...state,
    //     dataUpdateProfile: action.payload,
    //   };
    default:
      return state;
  }
};

export default authReducer;
