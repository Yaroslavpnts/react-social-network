import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.postsData} />
    </div>
  );
};

export default Profile;
