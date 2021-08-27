import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth = true) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.me();
    if (response.resultCode === 0) {
        const {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        const errorMessage = response.messages.length > 0 ? response.messages[0] : 'Something went wrong!';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
};

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        // dispatch(getAuthUserData());
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;