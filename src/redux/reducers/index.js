import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { contentReducer } from "./contentReducer";
import countryReducer from "./countryReducer";
import productReducer from "./productReducer";
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({
  authReducer,
  contentReducer,
  countryReducer,
  productReducer,
  globalReducer,
});

export default rootReducer;
