import { rerenderEntireTree } from '../render.js';

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 3, message: 'Bla-bla', likesCount: 11 },
      { id: 4, message: 'Hello everybody', likesCount: 11 },
    ],
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

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.postsData.push(newPost);

  rerenderEntireTree(state);
};

export default state;
