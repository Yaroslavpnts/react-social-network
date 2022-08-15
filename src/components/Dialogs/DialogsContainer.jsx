import {
  addMessageActionCreator,
  // updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContex';
import { connect } from 'react-redux/es/exports';
// import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer1 = props => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();

//         let onAddMessage = () => {
//           store.dispatch(addMessageActionCreator());
//         };

//         let onNewMassageChange = body => {
//           let action = updateNewMessageTextActionCreator(body);
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             dialogsPage={state.dialogsPage}
//             sendMessage={onAddMessage}
//             updateNewMessageBody={onNewMassageChange}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapStateToDispatch = dispatch => {
  return {
    sendMessage: message => {
      dispatch(addMessageActionCreator(message));
    },
    // updateNewMessageBody: body => {
    //   let action = updateNewMessageTextActionCreator(body);
    //   dispatch(action);
    // },
  };
};

// compose(connect(mapStateToProps, mapStateToDispatch), withAuthRedirect)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(AuthRedirectComponent);

// export default DialogsContainer;

export default compose(connect(mapStateToProps, mapStateToDispatch), withAuthRedirect)(Dialogs);
