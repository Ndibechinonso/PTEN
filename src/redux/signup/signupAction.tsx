import axios from "axios";
import {
  SIGNUP_DATA_REQUEST,
  SIGNUP_DATA_SUCCESS,
  SIGNUP_DATA_FAILURE,
} from "./signupType";


type UserActionType = {
  type: string,
  payload: []
}


type ErrorActionType = {
  type: string,
  payload: []
}

const signupRequest = () => {
  return {
    type: SIGNUP_DATA_REQUEST,
  };
};

const signupSuccess = (user: UserActionType) => {
  return {
    type: SIGNUP_DATA_SUCCESS,
    payload: user,
  };
};


const signupFailure = (error: ErrorActionType) => {
  return {
    type: SIGNUP_DATA_FAILURE,
    payload: error,
  };
};

const backendURL = process.env.REACT_APP_BACKEND_URL;

  
export const fetchSignUpData = (
  firstName: string,
  lastName: string,
  email: string,
  password: String,
  resetForm: any,
) => {
  return (dispatch: any) => {
    dispatch(signupRequest());

    axios
      .post(`${backendURL}/users/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((response: any) => {
        dispatch(signupSuccess(response.data))   
        console.log(response.data);
        resetForm({})
       
      })
      .catch((err) => {
        dispatch(signupFailure(err.response.data));
        console.log(err.response.data);
      });
  };
};
