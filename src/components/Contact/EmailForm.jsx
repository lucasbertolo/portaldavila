import React, { useState } from 'react';

import { Formik, Field, ErrorMessage } from 'formik';
// import { ValidationLogin } from '../Helpers/Validation';
import TextField from '@material-ui/core/TextField';

const EmailForm = () => {
  const [sendStatus, setSendStatus] = useState('');

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={ValidationLogin}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit,
        } = formikProps;

        return (
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <TextField
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                required
                placeholder="Nome"
              />
              <ErrorMessage component="span" name="name" />

              <TextField
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={!!errors.registerEmail}
                className="input"
                required
                placeholder="Email"
              />
              <ErrorMessage component="span" name="email" />
              <TextField
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={!!errors.registerEmail}
                className="input"
                placeholder="Celular"
                required
              />
              <ErrorMessage component="span" name="phone" />
              <Field
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                // error={!!errors.registerPassword}
                placeholder="Mensagem"
                required
              />
              <ErrorMessage component="span" name="message" />
              <button type="submit" className="submit-btn">
                Enviar
              </button>
              <p>{sendStatus}</p>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default EmailForm;
