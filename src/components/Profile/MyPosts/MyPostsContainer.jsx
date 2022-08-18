import {
  // updateNewPostTextActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux/es/exports';

// const MyPostsContainer1 = props => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         };

//         let onPostChange = text => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.postsData}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = state => {
  return {
    posts: state.profilePage.postsData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: message => {
      dispatch(addPostActionCreator(message));
    },

    // updateNewPostText: text => {
    //   let action = updateNewPostTextActionCreator(text);
    //   dispatch(action);
    // },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
