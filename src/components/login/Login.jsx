import React from 'react';
import classes from './login.module.css';
import { Formik } from 'formik';
// import requiredField from '../utilities/validators';
import { Navigate } from 'react-router-dom';
import { authValidationsSchema } from '../utilities/validators/validationSchema';
import { FormControls } from '../common/FormsControls/FormsControls';

/*
  initialValues - задаем начальные значения
  validateOnBlur - валидация будет в момент когда будем переходить на след. поле
  onSumbit={() => {}} - метод, который будет вызывать функцию в момент отправки формы
                        в функцию он передает нам наши значения, здесь может быть коллбэк с запросом на сервер (отправка данных)

  далее children, в формике это функция, которая принимает объект:
  values        - значения
  errorts       - ошибки
  touched       - показывает взаимодействовали ли мы с полем ранее
  handleChange  - вызывается каждый раз когда мы меняем значение формы
  handleBlur    - вызывается в момент когда мы уходим с какого-то поля
  isValid       - говорит валидна ли форма в данный момент или нет
  handleSubmit  - привязывается к кнопке отправки формы и он будет вызывать функцию onSubmit() указанную нами
  dirty         - говорит изменялись ли когда-то значения в форме
  
  эта функция должна вернуть какой-то jsx
*/

const Login = ({ isAuth, userId, logIn, captchaUrl }) => {
  if (isAuth) return <Navigate to={`/profile/${userId}`} />;

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captchaUrl: '',
        }}
        // validateOnBlur={true}  - по умолчанию
        // validateOnChange={true} - по умолчанию
        onSubmit={(values, { resetForm, setStatus, setSubmitting }) => {
          logIn(values, setStatus);
          resetForm();
          setSubmitting(false);
        }}
        validationSchema={authValidationsSchema(30, 5)}
        // validate={requiredField}
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
              <div>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email && classes.error}
                ></input>
              </div>
              <FormControls touched={touched} errors={errors} value="email" />
              <div>
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={touched.password && errors.password && classes.error}
                ></input>
              </div>
              <FormControls touched={touched} errors={errors} value="password" />
              <div>
                <input
                  type="checkbox"
                  name="rememberMe"
                  // value={values.rememberMe}
                  checked={values.rememberMe}
                  onChange={handleChange}
                ></input>{' '}
                <div>
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
              </div>
              {captchaUrl && (
                <div className={classes.captchaBlock}>
                  <div>
                    <input
                      type="text"
                      name="captchaUrl"
                      value={values.captchaUrl}
                      placeholder="captcha"
                      onChange={handleChange}
                      // onBlur={handleBlur}
                    ></input>
                  </div>
                  <div>
                    <img src={captchaUrl} alt="captcha"></img>
                  </div>
                </div>
              )}
              <div>
                <button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'}>
                  Log in
                </button>
              </div>
              <div>{status}</div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
