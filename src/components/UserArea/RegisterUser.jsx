import React, { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import Router from 'next/router';
import { ValidationLogin } from '../Helpers/Validation';

import enums from '../../content/enums';
import './RegisterUser.scss';

const RegisterUser = ({ handleRegister }) => {
  const [sendStatus, setSendStatus] = useState('');

  const initialValues = {
    registerUsername: '',
    registerPhone: '',
    registerEmail: '',
    registerPassword: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationLogin}
      onSubmit={(values, { setSubmitting }) => {
        handleRegister(values, enums.userType.consultant)
          .then((item) => {
            if (item.existUser) {
              setSendStatus('Já existe um usuário com esse nome');
              return null;
            }
            if (item.msg) {
              setSendStatus(item.msg);
              return null;
            }

            Router.push('/userarea');
          })
          .catch(() => setSendStatus(
            'Ocorreu um erro no servidor, tente novamente mais tarde',
          ));
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
        } = formikProps;

        return (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="register-container"
          >
            <h2 style={{ marginBottom: '50px' }}>
              Cadastro de novos consultores
            </h2>
            <div>
              <TextField
                fullWidth
                type="text"
                name="registerUsername"
                value={values.registerUsername}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                label="Nome do usuário"
                variant="outlined"
                error={!!errors.registerUsername}
              />
              <ErrorMessage component="span" name="registerUsername" />
              <div>
                <TextField
                  fullWidth
                  type="text"
                  name="registerPhone"
                  value={values.registerPhone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input"
                  variant="outlined"
                  label="Celular"
                />
                <ErrorMessage component="span" name="registerPhone" />
              </div>
            </div>
            <div>
              <TextField
                fullWidth
                type="email"
                name="registerEmail"
                value={values.registerEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                label="Email"
                variant="outlined"
                error={!!errors.registerEmail}
              />
              <div>
                <ErrorMessage component="span" name="registerEmail" />
              </div>
            </div>
            <div>
              <TextField
                fullWidth
                type="password"
                name="registerPassword"
                value={values.registerPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                label="Senha"
                variant="outlined"
                error={!!errors.registerPassword}
              />
              <div>
                <ErrorMessage component="span" name="registerPassword" />
              </div>
            </div>
            <div className="save">
              <button type="submit" className="register-submit btn-laydown">
                Enviar
              </button>
            </div>
            <div>
              <p>{sendStatus}</p>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterUser;
