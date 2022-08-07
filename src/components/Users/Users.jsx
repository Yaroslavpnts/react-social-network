import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { followAPI } from '../../api/follow/follow-api';

const Users = props => {
  let pages = [];

  if (props.currentPage <= 5) {
    for (let i = 1; i <= 10; i += 1) {
      pages.push(i);
    }
  } else {
    for (let i = props.currentPage - 5; i < props.currentPage + 5; i += 1) {
      pages.push(i);
    }
  }

  return (
    <div>
      <div className={classes.pages}>
        {pages.map(p => {
          return (
            <span
              onClick={e => {
                props.onPageChanged(p);
              }}
              key={p}
              className={props.currentPage === p ? classes.selectedPage : ''}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id} className={classes.user}>
          <div className={classes.photo}>
            <Link to={`/profile/${u.id}`}>
              <div className={classes.imgWrapper}>
                <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"></img>
              </div>
            </Link>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    followAPI.unfollow(u.id, props.unfollow);
                    // axios
                    //   .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    //     withCredentials: true,
                    //     headers: {
                    //       'API-KEY': 'ad530900-a7de-469c-834c-3dfb49ba381e',
                    //     },
                    //   })
                    //   .then(response => {
                    //     if (response.data.resultCode === 0) {
                    //       props.unfollow(u.id);
                    //     }
                    //   });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    followAPI.follow(u.id, props.follow);
                    // axios
                    //   .post(
                    //     `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    //     {},
                    //     {
                    //       withCredentials: true,
                    //       headers: {
                    //         'API-KEY': 'ad530900-a7de-469c-834c-3dfb49ba381e',
                    //       },
                    //     }
                    //   )
                    //   .then(response => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //   });
                  }}
                >
                  follow
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
