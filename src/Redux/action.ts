export const LOGIN_DATA = 'LOGIN_DATA';

export const loginuser = (data:any) => {
<<<<<<< Updated upstream
    console.log("dataaaa",data);
=======
>>>>>>> Stashed changes
    return {
        type: LOGIN_DATA,
        payload: data
    }
}

