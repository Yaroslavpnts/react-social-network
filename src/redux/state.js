// let rerenderEntireTree;

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: 'Bla-bla', likesCount: 11 },
        { id: 4, message: 'Hello everybody', likesCount: 11 },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: 'Mariya',
          photo:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        },
        {
          id: 2,
          name: 'Dimych',
          photo:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        },
        {
          id: 3,
          name: 'Alexander',
          photo:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {},

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.postsData.push(newPost);

    this._state.profilePage.newPostText = '';

    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: this._state.dialogsPage.messagesData.length + 1,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messagesData.push(newMessage);

    this._state.dialogsPage.newMessageText = '';

    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer; // паттерн observer
  },
};

export default store;

window.store = store;
// export default state;
