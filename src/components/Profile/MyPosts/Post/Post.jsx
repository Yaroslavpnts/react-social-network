import classes from './Post.module.css';

const Post = props => {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPW9da0an7QBRUAzS0Kg7QsF9JXJ9n7wVgw&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
