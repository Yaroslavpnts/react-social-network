const SET_USER_DATA = 'SET_USER_DATA';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

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

export default authReducer;
