import React from 'react';
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContex';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = text => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
