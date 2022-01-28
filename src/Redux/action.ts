export const LOGIN_DATA = 'LOGIN_DATA';

export const loginuser = (data:any) => {
    console.log("dataaaa",data);
    return {
        type: LOGIN_DATA,
        payload: data
    }
}

