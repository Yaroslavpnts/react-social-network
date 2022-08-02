// import * as axios from 'axios';
import axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = props => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items);
      });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      {props.users.map(u => (
        <div key={u.id} className={classes.user}>
          <div className={classes.photo}>
            <div className={classes.imgWrapper}>
              <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"></img>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </div>

          <div className={classes.info}>
            <div className={classes.intro}>
              <h3>{u.name}</h3>
              <p>{u.status}</p>
            </div>
            <div className={classes.location}>
              <span>{'u.location.country'}</span>
              <span>{'u.location.city'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
