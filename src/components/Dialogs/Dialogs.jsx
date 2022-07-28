import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = props => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogsData.map(dialog => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.messagesData.map(message => (
    <MessageItem key={message.id} id={message.id} message={message.message} />
  ));

  let newMessageText = React.createRef();

  let onClickCreacteMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onNewMassageChange = e => {
    // let text = newMessageText.current.value;
    let body = e.target.value;
    let action = updateNewMessageTextActionCreator(body);
    props.store.dispatch(action);
  };

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
            value={state.newMessageText}
          ></textarea>
          <button onClick={onClickCreacteMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
