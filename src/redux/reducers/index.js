import { combineReducers } from "redux";
import authReducer from './authReducer';
import { contentReducer } from "./contentReducer";


const rootReducer = combineReducers({
    // auth: authReducer
    contentReducer
})

export default rootReducer