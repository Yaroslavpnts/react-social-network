import classes from './MyPosts.module.css';
import Post from './PostItem/Post.jsx';
import React from // { PureComponent }
'react';
import { Formik } from 'formik';

const MyPosts = React.memo(props => {
  /*
  React.memo - HOK для функциональных компонент
  */
  /*
    Если наследоваться в классовой компоненте от PureComponent
    То там автоматически делается проверка на ShouldComponentUpdate

    Метод shouldComponentUpdate() базового класса React.PureComponent делает только поверхностное сравнение объектов. 
    Если они содержат сложные структуры данных, 
    это может привести к неправильной работе для более глубоких различий (то есть, различий, не выраженных на поверхности структуры). 
    Наследуйте класс PureComponent только тогда, когда вы ожидаете использовать простые пропсы и состояние
  */

  // shouldComponentUpdate(nextProps, nextState) {
  //   debugger;
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  const postsElements = props.posts.map(post => (
    <Post key={post.message} message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();
  console.log('render');
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
});

export default MyPosts;
