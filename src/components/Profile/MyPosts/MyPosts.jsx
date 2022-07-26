import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = props => {
  let postsElements = props.posts.map(post => (
    <Post key={post.message} message={post.message} likesCount={post.likesCount} />
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
