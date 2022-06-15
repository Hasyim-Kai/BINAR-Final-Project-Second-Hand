export const Login = (data) => {
    console.log('data telah masuk', data)
    return (dispatch) => {
        dispatch({ type: "SET_DATA_LOGIN", payload: data });
    };
};