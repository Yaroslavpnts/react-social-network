import classes from './User.module.css';
import userPhoto from '../../assets/images/user.png';
import { Link } from 'react-router-dom';

const User = ({ user, unfollow, follow, followingInProgress }) => {
  return (
    <div key={user.id} className={classes.user}>
      <div className={classes.photo}>
        <Link to={`/profile/${user.id}`}>
          <div className={classes.imgWrapper}>
            <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"></img>
          </div>
        </Link>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              follow
            </button>
          )}
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.intro}>
          <h3>{user.name}</h3>
          <p>{user.status}</p>
        </div>
        <div className={classes.location}>
          <span>{'user.location.country'}</span>
          <span>{'user.location.city'}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
