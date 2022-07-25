import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = props => {
  // let postsData = [
  //   { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  //   { id: 2, message: "It's my first post", likesCount: 11 },
  //   { id: 3, message: 'Bla-bla', likesCount: 11 },
  //   { id: 4, message: 'Hello everybody', likesCount: 11 },
  // ];

  let postsElements = props.data.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.createPost}>
        <div>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
