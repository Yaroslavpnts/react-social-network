import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';

let state = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Bla-bla', likesCount: 11 },
    { id: 4, message: 'Hello everybody', likesCount: 11 },
  ],
};

test('length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator('this post created by testing');

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.postsData.length).toBe(5);
});

test('added post message should be "this post created by testing"', () => {
  //1. test data
  let action = addPostActionCreator({ postText: 'this post created by testing' });

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.postsData[4].message).toBe('this post created by testing');
});

test('after deleting length of message should me decrement', () => {
  //1. test data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.postsData.length).toBe(3);
});
