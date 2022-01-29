import { SIGNUP_DATA_REQUEST, SIGNUP_DATA_SUCCESS, SIGNUP_DATA_FAILURE } from "./signupType";

// type CounterAction = {
//     type: string,
//     payload: []
// }

const initalState = {
    loading: false,
    data: [],
    error: []
}

const signupReducer = (state = initalState, action: any) =>{
switch(action.type){
    case SIGNUP_DATA_REQUEST: return {...state, loading: true};

    case SIGNUP_DATA_SUCCESS: return {loading: false, data: action.payload, error: []};

    case SIGNUP_DATA_FAILURE: return {loading: false, data: [], error: action.payload};

    default: return state;
}
};

export default signupReducer;