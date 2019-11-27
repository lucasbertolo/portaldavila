import React, { useState } from 'react';

import { Formik, Field, ErrorMessage } from 'formik';
import { ValidationLogin } from '../Helpers/Validation';

const Login = ({ handleLogin, handleRegister, container }) => {
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
    const {
      registerUsername, registerEmail, registerPhone, registerPassword,
    } = e;
    const { loginUsername, loginPassword } = e;

    if (register) {
      if (
        registerUsername !== ''
        && registerEmail !== ''
        && registerPassword !== ''
        && registerPhone !== ''
      ) {
        handleRegister(e).then((reg) => {
          if (reg) setRegStatus(reg.msg);
          return null;
        });
      } else {
        setRegStatus('Campo(s) vazio');
      }
    }
    if (login) {
      if (loginUsername !== '' && loginPassword !== '') {
        handleLogin(e).then((log) => {
          if (log) setLogStatus(log.msg);
          return null;
        });
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
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        } = formikProps;

        const containerStyle = container ? 'login-container' : '';
        const formStyle = container
          ? 'form-structor md-shadow'
          : 'form-structor login-modal';
        return (
          <form className={containerStyle} noValidate onSubmit={handleSubmit}>
            <div className={formStyle}>
              <div className={register ? 'signup' : 'signup slide-up'}>
                <h2
                  className="form-title"
                  id="signup"
                  onClick={handleContainer}
                  role="presentation"
                >
                  <span>ou</span>
                  Registrar
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
                  <ErrorMessage component="span" name="registerName" className="login-error"/>

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
                  <ErrorMessage component="span" name="registerEmail" className="login-error" />
                  <Field
                    type="email"
                    name="registerPhone"
                    value={values.registerPhone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // error={!!errors.registerEmail}
                    className="input"
                    placeholder="Telefone"
                  />
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
                  <ErrorMessage component="span" name="registerPassword" className="login-error"/>
                </div>
                <button type="submit" className="submit-btn">
                  Registrar
                </button>
                <p>{regStatus}</p>
              </div>
              <div className={login ? 'login' : 'login slide-up'}>
                <div className="center-modal">
                  <h2
                    className="form-title"
                    id="login"
                    onClick={handleContainer}
                    onKeyPress={handleContainer}
                    role="presentation"
                  >
                    <span>ou</span>
                    <p>Login</p>
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
                    <ErrorMessage component="span" name="loginUsername" className="login-error" />

                    <Field
                      type="password"
                      name="loginPassword"
                      value={values.loginPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input"
                      placeholder="Password"
                    />
                    <ErrorMessage component="span" name="loginPassword" className="login-error" />
                  </div>
                  <button type="submit" className="submit-btn">
                    Login
                  </button>
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
