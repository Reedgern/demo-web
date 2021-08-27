const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [],
    messages: [],
    newMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let new_message = {
                id: state.messages.length,
                message: state.newMessage
            };
            return {
                ...state,
                messages: [...state.messages, new_message],
                newMessage: ''
            };
        }
        case UPDATE_NEW_MESSAGE: {
            return {
                ...state,
                newMessage: action.newMessage
            };
        }
        default:
            return state;
    }
};

export const sendMessage = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBody = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE,
    newMessage
});

export default dialogsReducer;