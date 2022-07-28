import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map(message => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageText = React.createRef();

  let onClickBtn = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  };

  let onChangeTextArea = () => {
    let text = newMessageText.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });
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
          <button onClick={onClickBtn}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
