export const LOGIN_DATA = 'LOGIN_DATA';

export const loginuser = (data:any) => {
    return {
        type: LOGIN_DATA,
        payload: data
    }
}

