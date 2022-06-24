import { combineReducers } from "redux";
import authReducer from './authReducer';
import { contentReducer } from "./contentReducer";


const rootReducer = combineReducers({
    authReducer,
    contentReducer
})

export default rootReducer