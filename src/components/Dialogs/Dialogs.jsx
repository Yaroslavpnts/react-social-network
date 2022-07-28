import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map(message => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageText = React.createRef();

  let onClicCreacteMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onChangeTextArea = () => {
    let text = newMessageText.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.newMessage}>
          <textarea
            onChange={onChangeTextArea}
            className={classes.createMessage}
            ref={newMessageText}
            value={props.state.newMessageText}
          ></textarea>
          <button onClick={onClicCreacteMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
