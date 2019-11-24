import React, { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';

import { ValidationUser } from '../Helpers/Validation';

import './UserCard.scss';
import db from '../Helpers/ApiFetch';

const UserCard = ({ user, handleClose, refreshUser }) => {
  const [visible, setVisibility] = useState(false);
  const [message, setMessage] = useState('');
  const handleButton = () => setVisibility(!visible);

  const handleUpdate = (values) => {
    const { email, phone } = values;

    db.put('/user', {
      email,
      phone,
      id: user.id,
    })
      .then(() => {
        refreshUser();
        handleClose();
      })
      .catch(() => setMessage('Erro interno, tente novamente mais tarde'));
  };

  return (
    <Formik
      initialValues={{
        email: user.email || '',
        phone: user.phone || '',
      }}
      validationSchema={ValidationUser}
      onSubmit={(values, { setSubmitting }) => {
        handleUpdate(values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit, errors,
        } = formikProps;

        return (
          <form noValidate onSubmit={handleSubmit}>
            <div className="user-card">
              <div className="name">{user.username}</div>
              <div>
                <TextField
                  label="Telefone"
                  margin="normal"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={!visible}
                  name="phone"
                  required
                  error={!!errors.phone}
                />
              </div>
              <div>
                <ErrorMessage component="span" name="phone" />
              </div>

              <div>
                <TextField
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input"
                  label="Email"
                  placeholder="Email"
                  disabled={!visible}
                  error={!!errors.email}
                  required
                />
                <div>
                  <ErrorMessage component="span" name="email" />
                </div>
                {' '}

              </div>

              <div className="edit">
                <FontAwesomeIcon icon={faEdit} onClick={handleButton} />
              </div>
              <div>
                <p>{message}</p>
              </div>
              {visible && (
                <div className="save-box">
                  <input type="submit" value="Salvar" className="save-user" />
                </div>
              )}
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default UserCard;
