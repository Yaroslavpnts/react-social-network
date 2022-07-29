import React from 'react';
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContex';

const DialogsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onNewMassageChange = body => {
          let action = updateNewMessageTextActionCreator(body);
          store.dispatch(action);
        };

        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            sendMessage={onAddMessage}
            updateNewMessageBody={onNewMassageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
