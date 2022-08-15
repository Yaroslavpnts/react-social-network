import classes from './FormsControls.module.css';

export const FormControls = ({ touched, errors, value }) => {
  return touched[value] && errors[value] && <p className={classes.error}>{errors[value]}</p>;
};
