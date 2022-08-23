import classes from './FormsControls.module.css';

export const FormControls = ({ touched, errors, value }) => {
  console.log('touched: ', touched);
  console.log('errors: ', errors);
  return touched?.value && errors?.value && <p className={classes.error}>{errors[value]}</p>;
};

export const ProfileFormControls = ({ touched, errors, value }) => {
  const parsingError = string => {
    const index = string.indexOf('.');
    return string.slice(index + 1);
  };

  return (
    // touched?.contacts?.value && errors?.value && <p className={classes.error}>{errors[value]}</p>
    touched.contacts &&
    touched.contacts[value] &&
    errors.contacts &&
    errors.contacts[value] && (
      <p className={classes.error}>{parsingError(errors.contacts[value])}</p>
    )
  );
};
