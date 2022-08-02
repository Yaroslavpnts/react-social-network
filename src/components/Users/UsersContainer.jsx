import { connect } from 'react-redux';
import Users from './Users';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setUsersTotalCountAC,
} from '../../redux/users-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setUsersTotalCount: totalCount => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
