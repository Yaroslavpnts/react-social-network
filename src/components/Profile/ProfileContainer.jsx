// import MyPosts from './MyPosts/MyPosts.jsx';
import React, { useEffect } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';
import { compose } from 'redux';

/* Пока не учил хуки, сделаю функцию обертку, т.к. наша контейнерная компонента ProfileContainer - классовая компонента, то 
   мы не можем использовать хуки в классовых компонентах. Решение с офф документации - создать функцию обертку, которая по принципу
   идентична к withRouter
*/

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      // if (!userId) {
      //   this.props.router.navigate('/login');  - непонятно как сделать редирект в классовой компоненте
      // }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    if (!this.props.isAuth && !this.props.authorizedUserId) return <Navigate to="/login" />;
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateUserStatus}
        />
      </div>
    );
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

// export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
