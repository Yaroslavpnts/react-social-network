import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let postsData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 12 },
  { id: 2, message: "It's my first post", likesCount: 11 },
  { id: 3, message: 'Bla-bla', likesCount: 11 },
  { id: 4, message: 'Hello everybody', likesCount: 11 },
];

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts data={postsData} />
    </div>
  );
};

export default Profile;
