import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
  let state = props.store.getState();

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onNewMassageChange = body => {
    let action = updateNewMessageTextActionCreator(body);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      // dialogs={state.dialogsPage.dialogsData}
      // messages={state.dialogsPage.messagesData}
      // newMessageText={state.dialogsPage.newMessageText}
      dialogsPage={state.dialogsPage}
      sendMessage={onAddMessage}
      updateNewMessageBody={onNewMassageChange}
    />
  );
};

export default DialogsContainer;
