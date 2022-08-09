import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Navigate } from 'react-router-dom';

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map(message => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageText = React.createRef();

  let onClickCreacteMessage = () => {
    props.sendMessage();
  };

  let onNewMassageChange = e => {
    let body = e.target.value;
    // let action = updateNewMessageTextActionCreator(body);
    // props.store.dispatch(action);

    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div className={classes.newMessage}>
          <textarea
            onChange={onNewMassageChange}
            className={classes.createMessage}
            ref={newMessageText}
            value={props.dialogsPage.newMessageText}
          ></textarea>
          <button onClick={onClickCreacteMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
