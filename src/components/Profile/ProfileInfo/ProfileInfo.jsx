import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/preloader/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

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
          <img src={profile.photos.large || userPhoto} alt="" />
        </div>
        {!isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <div className={classes.aboutMe}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          <h3>{profile.fullName}</h3>
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
