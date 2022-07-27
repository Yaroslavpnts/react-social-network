import { rerenderEntireTree } from '../render.js';

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);

  state.profilePage.newPostText = '';

  rerenderEntireTree(state);
};

export let updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let updateNewMessageText = newText => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messagesData.push(newMessage);

  state.dialogsPage.newMessageText = '';

  rerenderEntireTree(state);
};

export default state;
