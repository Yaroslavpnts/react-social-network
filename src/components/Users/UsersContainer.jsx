import { connect } from 'react-redux';
import Users from './Users';
import { followAC } from '../../redux/users-reducer';
import { unfollowAC } from '../../redux/users-reducer';
import { setUsersAC } from '../../redux/users-reducer';

const mapStateToProps = state => {
  return {
    users: state.usersPage.usersData,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
