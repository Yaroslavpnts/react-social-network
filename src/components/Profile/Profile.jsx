import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.mainImg}>
        <img
          src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
          alt=""
        />
      </div>

      <div className={classes.mainInfo}>
        <div className={classes.avatar}>
          <img
            src="http://c.files.bbci.co.uk/C870/production/_112921315_gettyimages-876284806.jpg"
            alt=""
          />
        </div>
        <div className={classes.aboutMe}>
          <h3>Name</h3>
          <p>Birthday</p>
          <p>Cty</p>
          <p>Education</p>
          <p>Website</p>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
