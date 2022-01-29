import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import { loginReducer } from "./login/loginReducer";

const rootReducer = combineReducers({signupData: signupReducer, loginData: loginReducer});

export default rootReducer;