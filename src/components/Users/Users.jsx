// import * as axios from 'axios';
import axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import React from 'react';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class Users extends React.Component {
  componentDidMount() {
    // alert('I know I am inside the DOM');

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.setUsers(response.data.items);
      });

    //тут в Get-параметре "page" беру номер страницы который пришел сюда с onClick, т.к. на момент когда этот запрос будет выполняться
    //this.props.currentPage будет ссылаться еще на прошлую страницу
  };

  componentDidUpdate() {
    // alert('I know I am updated in the DOM');
  }

  componentWillUnmount() {
    // alert('I know i am going to be destoyed');
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    }

    return (
      <div>
        <div className={classes.pages}>
          {pages.map(p => {
            return (
              <span
                onClick={e => {
                  this.onPageChanged(p);
                }}
                className={this.props.currentPage === p ? classes.selectedPage : ''}
              >
                {p}
              </span>
            );
          })}
        </div>
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
