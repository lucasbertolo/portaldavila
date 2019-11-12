/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import {
  Formik, Field, ErrorMessage,
} from 'formik';
import { ValidationLogin } from '../Helpers/Validation';

import { db } from '../Helpers/ApiFetch';
import enums from '../../content/enums';
import './Login.scss';

const Login = ({ handleLogin }) => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
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
        const request = await db.post('/registeruser', {
          username: registerUsername,
          email: registerEmail,
          password: registerPassword,
          phone: '3333-2222',
          type_id: enums.userType.guest,
        });
        if (request.data.msg) {
          alert(request.data.msg);
        }
      } else {
        alert('Campo vazio');
      }
    }

    if (login) {
      if (loginUsername !== '' && loginPassword !== '') {
        const request = await db.post('/user', {
          auth: {
            username: loginUsername,
            password: loginPassword,
          },
        });
        if (request.data.msg) {
          alert(request.data.msg);
          return;
        }
        console.log(request.data);
        handleLogin(request.data);
      } else {
        alert('Campo(s) vazio');
      }
    }

    // handleLogin('a', 'b');
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
          values, handleChange, handleBlur, handleSubmit,
        } = formikProps;

        return (

          <form className="login-container" noValidate onSubmit={handleSubmit}>
            <div className="form-structor">
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
                    placeholder="Password"
                  />
                  <ErrorMessage component="span" name="registerPassword" />

                </div>
                <button type="submit" className="submit-btn">Sign up</button>
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
