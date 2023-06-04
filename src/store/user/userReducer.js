import * as types from "./userTypes";

const initialState = {
    currentUser: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}
