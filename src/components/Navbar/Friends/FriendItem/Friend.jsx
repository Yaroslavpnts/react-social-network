import classes from './Friend.module.css';

const Friend = props => {
  return (
    <li className={classes.friend}>
      <div>
        <img src={props.photo} alt="" />
      </div>
      <span>{props.name}</span>
    </li>
  );
};

export default Friend;
