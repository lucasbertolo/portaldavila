import React, { useState } from 'react';

import {
  Formik, Field, ErrorMessage,
} from 'formik';
import { ValidationLogin } from '../Helpers/Validation';


const Login = ({ handleLogin }) => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [regStatus, setRegStatus] = useState('');
  const [logStatus, setLogStatus] = useState('');

  const initialValues = {
    loginUsername: '',
    loginPassword: '',
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPhone: '',
  };

  const handleLogon = async (e) => {
    const { registerUsername, registerEmail, registerPassword } = e;
    const { loginUsername, loginPassword } = e;

    if (register) {
      if (registerUsername !== '' && registerEmail !== '' && registerPassword !== '') {
        handleLogin(e);
      } else {
        setRegStatus('Campo(s) vazio');
      }
    }

    if (login) {
      if (loginUsername !== '' && loginPassword !== '') {
        handleLogin(e);
      } else {
        setLogStatus('Campo(s) vazio');
      }
    }
  };

  const handleContainer = () => {
    setLogin(!login);
    setRegister(!register);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationLogin}
      onSubmit={(values, { setSubmitting }) => {
        handleLogon(values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit, errors,
        } = formikProps;

        return (

          <form className="login-container" noValidate onSubmit={handleSubmit}>
            <div className="form-structor login-modal">
              <div className={register ? 'signup' : 'signup slide-up'}>
                <h2
                  className="form-title"
                  id="signup"
                  onClick={handleContainer}
                  role="presentation"
                >
                  <span>or</span>
                  Sign up
                </h2>
                <div className="form-holder">
                  <Field
                    type="text"
                    name="registerUsername"
                    value={values.registerUsername}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input"
                    placeholder="Nome de usuário"
                  />
                  <ErrorMessage component="span" name="registerName" />

                  <Field
                    type="email"
                    name="registerEmail"
                    value={values.registerEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // error={!!errors.registerEmail}
                    className="input"
                    placeholder="Email"
                  />
                  <ErrorMessage component="span" name="registerEmail" />
                  <Field
                    type="password"
                    name="registerPassword"
                    value={values.registerPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input"
                    // error={!!errors.registerPassword}
                    placeholder="Password"
                  />
                  <ErrorMessage component="span" name="registerPassword" />
                </div>
                <button type="submit" className="submit-btn">Sign up</button>
                <p>{regStatus}</p>
              </div>
              <div className={login ? 'login' : 'login slide-up'}>
                <div className="center">
                  <h2
                    className="form-title"
                    id="login"
                    onClick={handleContainer}
                    onKeyPress={handleContainer}
                    role="presentation"
                  >
                    <span>or</span>
                    <p>Log in</p>
                  </h2>
                  <div className="form-holder">
                    <Field
                      type="text"
                      name="loginUsername"
                      value={values.loginUsername}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input"
                      placeholder="Nome de usuário"
                    />
                    <ErrorMessage component="span" name="loginUsername" />

                    <Field
                      type="password"
                      name="loginPassword"
                      value={values.loginPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input"
                      placeholder="Password"
                    />
                    <ErrorMessage component="span" name="loginPassword" />

                  </div>
                  <button type="submit" className="submit-btn">Log in</button>
                  <p>{logStatus}</p>
                </div>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default Login;
