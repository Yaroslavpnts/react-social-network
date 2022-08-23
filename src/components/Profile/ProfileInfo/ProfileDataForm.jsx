import classes from './ProfileDataForm.module.css';
import { Formik } from 'formik';
import { profileDataValidationSchema } from '../../utilities/validators/validationSchema';
import { ProfileFormControls } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ profile, updateProfile, setEditMode }) => {
  return (
    <Formik
      initialValues={{
        fullname: profile.fullName,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription
          ? profile.lookingForAJobDescription
          : '',
        aboutMe: profile.aboutMe ? profile.aboutMe : '',
        contacts: profile.contacts,
      }}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          await updateProfile(values, setStatus);

          setSubmitting(false);

          setEditMode(false);
        } catch (error) {
          console.log(error);
        }
      }}
      validationSchema={profileDataValidationSchema(profile.contacts)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
        status,
      }) => {
        return (
          <form>
            <button onClick={handleSubmit} type="submit">
              save
            </button>
            <div>
              <div>
                <label htmlFor="fullname">Full name</label>
              </div>
              <input
                name="fullname"
                id="fullname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
              ></input>
            </div>
            <div>
              <div>
                <label htmlFor="lookingForAJob">Looking for a job</label>
              </div>
              <input
                name="lookingForAJob"
                id="lookingForAJob"
                type="checkbox"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJob}
                checked={values.lookingForAJob}
              ></input>
            </div>
            <div>
              <div>
                <label htmlFor="lookingForAJobDescription">My proffesional skills</label>
              </div>
              <textarea
                name="lookingForAJobDescription"
                id="lookingForAJobDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription}
              ></textarea>
            </div>
            <div>
              <div>
                <label htmlFor="aboutMe">About me</label>
              </div>
              <input
                name="aboutMe"
                id="aboutMe"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe}
              ></input>
            </div>

            <div>
              <div className={classes.contacts}>
                <span className={classes.description}>Contacts:</span>
                <div>
                  {Object.keys(profile.contacts).map(key => {
                    return (
                      <div key={key}>
                        <div>
                          <label htmlFor={key}>{key}</label>
                        </div>
                        <input
                          id={key}
                          name={`contacts[${key}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.contacts[key] ? values.contacts[key] : ''}
                        />
                        <ProfileFormControls touched={touched} errors={errors} value={key} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>{status}</div>
          </form>
        );
      }}
    </Formik>
  );
};

export default ProfileDataForm;
