import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./loginTypes";


const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

const loginSuccess = (token: string) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

const loginFailure = (error: string) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
}

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
        // payload: token
    }
}


export const fetchLogin = (username: string, password: string) =>{
    return (dispatch: any)=>{
dispatch(loginRequest());
axios.post('http://localhost:8081/users/login', {username, password })
.then((response: any)=>{
    const token = response.data.token
    console.log(token, 'res');
    localStorage.setItem('token', token)
    dispatch(loginSuccess(token))
})
.catch((error)=>{
    dispatch(loginFailure(error.response.data))
})
    }
}
