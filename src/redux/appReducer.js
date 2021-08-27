import {getAuthUserData} from "./authReducer";

const initialState = {
    initialized: false
};

const INITIALIZING_SUCCESS = 'SET-INITIALIZED';

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZING_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
};

export const initializingSuccess = () => ({
    type: INITIALIZING_SUCCESS
});

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
                dispatch(initializingSuccess());
            }
        )
};

export default appReducer;