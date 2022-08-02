const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {
  usersData: [],
  pageSize: 15,
  totalUsersCount: 19,
  currentPage: 3,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        usersData: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_USERS_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    default:
      return state;
  }
};

export const followAC = userID => ({
  type: FOLLOW,
  userID,
});

export const unfollowAC = userID => ({
  type: UNFOLLOW,
  userID,
});

export const setUsersAC = users => ({
  type: SET_USERS,
  users,
});

export const setCurrentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersTotalCountAC = totalCount => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});

export default usersReducer;
