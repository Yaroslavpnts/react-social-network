import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" />
        <Post message="It's my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
