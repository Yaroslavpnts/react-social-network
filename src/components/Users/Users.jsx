// import * as axios from 'axios';
import axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import React from 'react';

class Users extends React.Component {
  componentDidMount() {
    // alert('I know I am inside the DOM');

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  componentDidUpdate() {
    // alert('I know I am updated in the DOM');
  }

  componentWillUnmount() {
    // alert('I know i am going to be destoyed');
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id} className={classes.user}>
            <div className={classes.photo}>
              <div className={classes.imgWrapper}>
                <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"></img>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default Users;
