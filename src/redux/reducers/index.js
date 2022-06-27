import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { contentReducer } from "./contentReducer";
import countryReducer from "./countryReducer";

const rootReducer = combineReducers({
  authReducer,
  contentReducer,
  countryReducer,
});

export default rootReducer;
