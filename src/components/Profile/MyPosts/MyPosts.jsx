import classes from './MyPosts.module.css';
import Post from './PostItem/Post.jsx';
import React from 'react';
// import {
//   updateNewPostTextActionCreator,
//   addPostActionCreator,
// } from '../../../redux/profile-reducer';

const MyPosts = props => {
  let postsElements = props.profilePage.postsData.map(post => (
    <Post key={post.message} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();

    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch(action);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <div>
          <textarea
            ref={newPostElement}
            value={props.profilePage.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
