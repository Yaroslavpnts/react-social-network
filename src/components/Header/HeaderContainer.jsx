import React from 'react';
import Header from './Header';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
    // axios
    //   .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
    //     withCredentials: true,
    //   })
    //   .then(response => {
    //     if (response.data.resultCode === 0) {
    //       let { id, login, email } = response.data.data;
    //       this.props.setAuthUserData(id, login, email);
    //       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
    //         this.props.setCurrentUser(response.data);
    //       });
    //     }
    //   });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
