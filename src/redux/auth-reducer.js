import { authAPI } from '../api/auth/auth-api';
import { profileAPI } from '../api/profile/profile-api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CURRENT_USER = 'auth/SET_CURRENT_USER';
const SHOW_CAPTCHA = 'auth/SHOW_CAPTCHA';

const STATUS_SUCCESS = 0;
// const STATUS_ERROR = 1;
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
  return async dispatch => {
    let response = await authAPI.authMe();

    if (response.data.resultCode === STATUS_SUCCESS) {
      const { id, login, email } = response.data.data;

      dispatch(setAuthUserData(id, login, email, true));

      let responseData = await profileAPI.getProfile(id);

      dispatch(setCurrentUser(responseData.data));
    }
  };
};

export const logIn = (data, setStatus) => {
  return async dispatch => {
    const response = await authAPI.logIn(data);
    console.log(response.data);
    if (response.data.resultCode === STATUS_SUCCESS) {
      dispatch(getAuthUserData());
    } else if (response.data.resultCode === STATUS_CAPTCHA) {
      const response = await authAPI.security();
      dispatch(showCaptcha(response.data.url));
    } else {
      setStatus(response.data.messages);
    }
  };
};

export const logOut = () => {
  return async dispatch => {
    const response = await authAPI.logOut();
    if (response.data.resultCode === STATUS_SUCCESS) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

export default authReducer;
