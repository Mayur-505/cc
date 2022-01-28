import { LOGIN_DATA } from "./action";

const initialState = {
    loginData: [],

}
export const Reducer = (state = initialState, action:any) => {
    if (action.type === LOGIN_DATA) {
        return { ...state, loginData: action.payload }
    }
   
    else {
        return state;
    }
}
