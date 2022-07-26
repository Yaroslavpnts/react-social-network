import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
  { id: 3, message: 'Bla-bla', likesCount: 11 },
  { id: 4, message: 'Hello everybody', likesCount: 11 },
];

let dialogsData = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Yaroslav' },
  { id: 3, name: 'Dasha' },
  { id: 4, name: 'Viktor' },
  { id: 5, name: 'Alexander' },
  { id: 6, name: 'Mariya' },
];

let messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
