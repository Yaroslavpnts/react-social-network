import { authAPI } from '../api/auth/auth-api';
import { profileAPI } from '../api/profile/profile-api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const LOG_IN = 'LOG_IN';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  currentUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    case LOG_IN:
      return {
        ...state,
        userId: action.userId,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const logInApp = userId => ({
  type: LOG_IN,
  userId,
});

export const getAuthUserData = () => {
  return dispatch => {
    authAPI
      .authMe()
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          dispatch(setAuthUserData(id, login, email));
          profileAPI.getProfile(id).then(response => {
            dispatch(setCurrentUser(response.data));
          });
        }
      })
      .catch(err => console.log(err));
  };
};

export const logIn = data => {
  return dispatch => {
    authAPI.logIn(data).then(response => {
      console.log(response);
      if (response.data.resultCode === 0) {
        dispatch(logInApp(response.data.data.userId));
      }
    });
  };
};

export default authReducer;
