import { authAPI } from '../api/auth/auth-api';
import { profileAPI } from '../api/profile/profile-api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SHOW_CAPTCHA = 'SHOW_CAPTCHA';

const STATUS_SUCCESS = 0;
const STATUS_ERROR = 1;
const STATUS_CAPTCHA = 10;

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  // rememberMe: false,
  // isFetching: false,
  currentUser: null,
  captcha: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    case SHOW_CAPTCHA:
      return {
        ...state,
        captcha: action.url,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    login,
    email,
    isAuth,
  },
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const showCaptcha = url => ({
  type: SHOW_CAPTCHA,
  url,
});

export const getAuthUserData = () => {
  return dispatch => {
    return authAPI
      .authMe()
      .then(response => {
        if (response.data.resultCode === STATUS_SUCCESS) {
          const { id, login, email } = response.data.data;
          dispatch(setAuthUserData(id, login, email, true));
          profileAPI.getProfile(id).then(response => {
            console.log(response);
            dispatch(setCurrentUser(response.data));
          });
        }
      })
      .catch(err => console.log(err));
  };
};

export const logIn = (data, setStatus) => {
  return dispatch => {
    authAPI.logIn(data).then(response => {
      console.log(response.data);
      if (response.data.resultCode === STATUS_SUCCESS) {
        dispatch(getAuthUserData());
      } else if (response.data.resultCode === STATUS_CAPTCHA) {
        authAPI.security().then(response => {
          dispatch(showCaptcha(response.data.url));
        });
      } else {
        setStatus(response.data.messages);
      }
    });
  };
};

export const logOut = () => {
  return dispatch => {
    authAPI.logOut().then(response => {
      if (response.data.resultCode === STATUS_SUCCESS) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
