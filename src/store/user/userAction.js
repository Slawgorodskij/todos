import * as types from "./userTypes";


export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
    payload: null,
})

