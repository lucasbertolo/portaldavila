import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Formik, ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';
import { ValidationEmail } from '../Helpers/Validation';
import db from '../Helpers/ApiFetch';

import './EmailForm.scss';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255,255,255,0.7)',
      },
      '&:hover fieldset': {
        borderColor: '#66fcf1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#66fcf1',
      },
    },
  },
})(TextField);

const EmailForm = () => {
  const [sendStatus, setSendStatus] = useState('');

  const initialValues = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    const {
      name, phone, email, message,
    } = values;
    db.post('/contact', {
      name,
      phone,
      email,
      message,
    })
      .then(() => setSendStatus('Enviado com sucesso'))
      .catch(() => setSendStatus('Erro no envio, tente novamente mais tarde'));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationEmail}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit, errors,
        } = formikProps;

        return (
          <form noValidate onSubmit={handleSubmit} className="email-form">
            <h2>Envie sua mensagem</h2>
            <div>
              <CssTextField
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                label="Nome"
                error={!!errors.name}
              />

              <CssTextField
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={!!errors.registerEmail}
                className="input"
                label="Celular"
              />
              <div>
                <ErrorMessage component="span" name="phone" />
                <ErrorMessage component="span" name="name" />
              </div>
            </div>
            <div>
              <CssTextField
                fullWidth
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                // error={!!errors.registerEmail}
                className="input"
                label="Email"
                error={!!errors.email}
              />
              <div>
                <ErrorMessage component="span" name="email" />
              </div>
            </div>
            <div>
              <CssTextField
                type="text"
                name="message"
                fullWidth
                multiline
                rows={2}
                rowsMax={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input"
                label="Mensagem"
                error={!!errors.message}
              />
              <div>
                <ErrorMessage component="span" name="message" />
              </div>
            </div>
            <div className="save">
              <button type="submit" className="contact-submit btn-laydown">
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

export default EmailForm;
