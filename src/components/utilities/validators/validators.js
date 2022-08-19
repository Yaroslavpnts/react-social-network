const requiredField = values => {
  let errors = {};

  if (!values.email) {
    errors.email = 'email is required';
  } else if (values.email.length < 5) {
    errors.email = "email length can't be less than 5";
  }

  if (!values.password) {
    errors.password = 'password is required';
  }

  return errors;
};

export default requiredField;
