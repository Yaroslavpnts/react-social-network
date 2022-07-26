// import dialogsReducer from './dialogs-reducer';
// import profileReducer from './profile-reducer';
// import sidebarReducer from './sidebar-reducer';

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, message: 'Hi, how are you?', likesCount: 12 },
//         { id: 2, message: "It's my first post", likesCount: 11 },
//         { id: 3, message: 'Bla-bla', likesCount: 11 },
//         { id: 4, message: 'Hello everybody', likesCount: 11 },
//       ],
//       newPostText: '',
//     },
//     dialogsPage: {
//       messagesData: [
//         { id: 1, message: 'Hi' },
//         { id: 2, message: 'How are you?' },
//         { id: 3, message: 'Yo' },
//         { id: 4, message: 'Yo' },
//         { id: 5, message: 'Yo' },
//       ],
//       dialogsData: [
//         { id: 1, name: 'Dimych' },
//         { id: 2, name: 'Yaroslav' },
//         { id: 3, name: 'Dasha' },
//         { id: 4, name: 'Viktor' },
//         { id: 5, name: 'Alexander' },
//         { id: 6, name: 'Mariya' },
//       ],
//       newMessageText: '',
//     },
//     sidebar: {
//       friends: [
//         {
//           id: 1,
//           name: 'Mariya',
//           photo:
//             'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
//         },
//         {
//           id: 2,
//           name: 'Dimych',
//           photo:
//             'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
//         },
//         {
//           id: 3,
//           name: 'Alexander',
//           photo:
//             'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
//         },
//       ],
//     },
//   },

//   _callSubscriber() {},

//   getState() {
//     return this._state;
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer; // паттерн observer
//   },

// action - это объект (действие)
// этот объект описывает какое действение неоходимо совершить
// у этого объекта обязательно должно быть свойство type: 'название действия'
//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;

// window.store = store;
