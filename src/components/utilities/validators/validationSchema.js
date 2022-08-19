import * as yup from 'yup';

const validationsSchema = (maxLength, minLength) => {
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

export default validationsSchema;
