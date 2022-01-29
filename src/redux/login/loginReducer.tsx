import { bindActionCreators } from "redux";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./loginTypes";

const initialState = {
  loading: false,
  loggedIn: false,
  data: [],
  error: "",
};

export const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        data: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};
