import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { contentReducer } from "./contentReducer";
import countryReducer from "./countryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  authReducer,
  contentReducer,
  countryReducer,
  productReducer,
});

export default rootReducer;
