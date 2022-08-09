import { connect } from 'react-redux';
import { getUsers, follow, unfollow } from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    // alert('I know I am inside the DOM');
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);

    // this.props.setCurrentPage(pageNumber);       ????????????????????
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    // });
  };

  componentDidUpdate() {
    // alert('I know I am updated in the DOM');
  }

  componentWillUnmount() {
    // alert('I know i am going to be destoyed');
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId));
//     },
//     unfollow: userId => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setUsersTotalCount: totalCount => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },

//     getUsers: (currentPage, pageSize) => {
//       dispatch(getUsers(currentPage, pageSize));
//     },
//   };
// };

let withRedirect = withAuthRedirect(UsersContainer);

//Диспатчим вызов этих функций
export default connect(mapStateToProps, {
  getUsers,
  follow,
  unfollow,
})(withRedirect);
