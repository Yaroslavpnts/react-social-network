import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import React from 'react';

const MyPosts = props => {
  let postsElements = props.posts.map(post => (
    <Post key={post.message} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;

    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text });
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
