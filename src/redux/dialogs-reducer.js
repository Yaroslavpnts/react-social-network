const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
  ],
  dialogsData: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Yaroslav' },
    { id: 3, name: 'Dasha' },
    { id: 4, name: 'Viktor' },
    { id: 5, name: 'Alexander' },
    { id: 6, name: 'Mariya' },
  ],
  newMessageText: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageText: action.body,
      };
    }

    case ADD_MESSAGE: {
      let newMessage = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };

      let stateCopy = {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: '',
      };

      return stateCopy;
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialogsReducer;
