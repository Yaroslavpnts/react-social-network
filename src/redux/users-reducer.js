import { usersAPI } from '../api/users/users-api';
import { followAPI } from '../api/follow/follow-api';
import { updateObjectInArray } from '../components/utilities/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  usersData: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // usersData: state.usersData.map(u => {
        //   if (u.id === action.userID) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // }),
        usersData: updateObjectInArray(state.usersData, action.userId, 'id', { followed: true }),
      };

    case UNFOLLOW:
      return {
        ...state,
        // usersData: state.usersData.map(u => {
        //   if (u.id === action.userID) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // }),
        usersData: updateObjectInArray(state.usersData, action.userId, 'id', { followed: false }),
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = userId => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = userId => ({
  type: UNFOLLOW,
  userId,
});

export const setUsers = users => ({
  type: SET_USERS,
  users,
});

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setUsersTotalCount = totalCount => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//getUsersThunkCreator
export const requestUsers = (page, pageSize) => {
  return async dispatch => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));
  };
};

export const follow = userId => {
  return async dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    const response = await followAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export const unfollow = userId => {
  return async dispatch => {
    dispatch(toggleFollowingProgress(true, userId));

    const response = await followAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
