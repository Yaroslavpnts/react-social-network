import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  let newPages;

  if (props.currentPage <= 5) {
    newPages = pages.slice(0, 10);
  } else {
    newPages = pages.slice(props.currentPage - 5, props.currentPage + 5);
  }

  return (
    <div>
      <div className={classes.pages}>
        {newPages.map(p => {
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
            <NavLink to={`/profile/${u.id}`}>
              <div className={classes.imgWrapper}>
                <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"></img>
              </div>
            </NavLink>
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
