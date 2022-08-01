import classes from './Friends.module.css';
import Friend from './FriendItem/Friend';

const Friends = props => {
  console.log(props);
  return (
    <div className={classes.friendsContainer}>
      <span>Friends</span>
      <ul className={classes.friendsList}>
        {props.friends.map(friend => (
          <Friend key={friend.id} name={friend.name} photo={friend.photo} />
        ))}
      </ul>
    </div>
  );
};

export default Friends;
