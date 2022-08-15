import classes from './MyPosts.module.css';
import Post from './PostItem/Post.jsx';
import React from 'react';
import { Formik } from 'formik';

const MyPosts = props => {
  let postsElements = props.profilePage.postsData.map(post => (
    <Post key={post.message} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  // let onPostChange = () => {
  //   // let text = newPostElement.current.value;
  //   // props.updateNewPostText(text);

  //   // let action = updateNewPostTextActionCreator(text);
  //   // props.dispatch(action);
  // };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      {/* <div className={classes.createPost}>
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
      </div> */}
      <Formik
        initialValues={{
          postText: '',
        }}
        onSubmit={(values, actions) => {
          props.addPost(values);
          actions.resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit, setValues }) => {
          console.log('rerendered');
          return (
            <form>
              <div className={classes.createPost}>
                <div>
                  <textarea
                    name="postText"
                    ref={newPostElement}
                    value={values.postText}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button type="submit" onClick={handleSubmit}>
                    Add post
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
