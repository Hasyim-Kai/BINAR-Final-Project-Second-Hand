import { combineReducers } from "redux";
import authReducer from "./authReducer";
import countryReducer from "./countryReducer";
import productReducer from "./productReducer";
import globalReducer from "./globalReducer";
import interestReducer from "./transactionReducer";

const rootReducer = combineReducers({
  authReducer,
  countryReducer,
  productReducer,
  globalReducer,
  interestReducer,
});

export default rootReducer;
