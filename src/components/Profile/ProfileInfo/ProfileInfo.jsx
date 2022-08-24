import classes from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import Preloader from '../../common/preloader/Preloader';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, updateProfile }) => {
  let [editMode, setEditMode] = useState(false);

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
        <div className={classes.imageBlock}>
          <div className={classes.avatar}>
            <img src={profile.photos.large || userPhoto} alt="" />
          </div>

          {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        </div>
        <div className={classes.aboutMe}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          {editMode ? (
            <ProfileDataForm
              profile={profile}
              updateProfile={updateProfile}
              setEditMode={setEditMode}
            />
          ) : (
            <ProfileData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <h3>
        <span className={classes.description}>Full name: </span>
        {profile.fullName}
      </h3>
      <p>
        <span className={classes.description}>Looking for a job:</span>
        {profile.lookingForAJob ? 'yes' : 'no'}
      </p>
      {profile.lookingForAJob && (
        <p>
          <span className={classes.description}>My proffesional skills:</span>
          {profile.lookingForAJobDescription}
        </p>
      )}
      <p>
        <span className={classes.description}>About me:</span> {profile.aboutMe}
      </p>
      <div>
        <div className={classes.contacts}>
          <span className={classes.description}>Contacts:</span>
          <div>
            {Object.keys(profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={classes.contact}>
      <span className={classes.description}>{contactTitle}:</span> {contactValue}
    </div>
  );
};

export default ProfileInfo;
