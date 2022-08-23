import * as yup from 'yup';

export const authValidationsSchema = (maxLength, minLength) => {
  return yup.object().shape({
    email: yup.string().email("Email isn't valid").required('Required field'),
    password: yup
      .string()
      .typeError('Должно быть строкой')
      .max(maxLength, `Must be ${maxLength} characters or less`)
      .min(minLength, `Must be ${minLength} characters or more`)
      .required('Required field'),
  });
};

export const profileDataValidationSchema = contacts => {
  const schema = {};

  for (let key of Object.keys(contacts)) {
    schema[key] = yup.string().url().nullable();
  }

  // return yup.object().shape(schema);
  return yup.object().shape({ contacts: yup.object().shape(schema) });
};
