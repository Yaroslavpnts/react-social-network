// import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { logIn } from '../../redux/auth-reducer';

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { logIn })(Login);
