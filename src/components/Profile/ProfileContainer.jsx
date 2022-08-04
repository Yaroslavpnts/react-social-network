// import MyPosts from './MyPosts/MyPosts.jsx';
import React from 'react';
import Profile from './Profile.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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
    if (!userId) userId = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
