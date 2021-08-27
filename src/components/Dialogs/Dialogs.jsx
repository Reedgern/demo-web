import React from "react";
import {connect} from "react-redux";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect";
import {compose} from "redux";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessage = state.newMessage;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div>
            <div>{dialogsElements}</div>
            <div>{messagesElements}</div>
            <div>
                <textarea value={newMessage} onChange={onMessageChange}></textarea>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = {
    sendMessage,
    updateNewMessageBody
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);