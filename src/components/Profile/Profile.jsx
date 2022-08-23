// import MyPosts from './MyPosts/MyPosts.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        updateProfile={props.updateProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
