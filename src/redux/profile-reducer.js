import { profileAPI } from '../api/profile/profile-api';

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Bla-bla', likesCount: 11 },
    { id: 4, message: 'Hello everybody', likesCount: 11 },
  ],
  // newPostText: '',
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        // message: state.newPostText,
        message: action.message.postText,
        likesCount: 0,
      };

      let stateCopy = {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };

      return stateCopy;

    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newText,
    //   };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(post => post.id !== action.postId),
      };

    default:
      return state;
  }
};

export const addPostActionCreator = message => ({
  type: ADD_POST,
  message,
});

// export const updateNewPostTextActionCreator = text => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = status => ({
  type: SET_STATUS,
  status,
});

export const updateStatus = status => ({
  type: UPDATE_STATUS,
  status,
});

export const deletePost = postId => ({
  type: DELETE_POST,
  postId,
});

export const getUserProfile = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateUserStatus = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
