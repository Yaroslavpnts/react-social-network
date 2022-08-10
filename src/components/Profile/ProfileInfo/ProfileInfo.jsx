import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.mainImg}>
        <img
          src="https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
          alt=""
        />
      </div>

      <div className={classes.descriptionBlock}>
        <div className={classes.avatar}>
          <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="" />
        </div>
        <div className={classes.aboutMe}>
          <ProfileStatus status="Hello my friends" />
          <h3>{props.profile.fullName}</h3>
          <p>Birthday</p>
          <p>Cty</p>
          <p>Education</p>
          <p>Website</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
