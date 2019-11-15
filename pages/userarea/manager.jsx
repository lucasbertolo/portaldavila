/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import { db } from '../../src/components/Helpers/ApiFetch';

import ManagerForm from '../../src/components/UserArea/ManagerForm';
import Header from '../../src/components/Header/Header';

import Toast from '../../src/components/Helpers/Toast';
import ErrorBox from '../../src/components/Helpers/ErrorBox';

const ManagerProperty = ({ data, error }) => {
  const [state, setState] = useState({
    msg: '',
    open: false,
    status: 'info',
  });
  const toastClose = () => {
    setState({ open: false });
  };

  const onSubmit = (obj) => {
    let id;

    if (data) {
      id = data.id;
    }

    const method = id ? 'put' : 'post';
    const url = id ? `/property/${id}` : '/property';

    // setState({
    //   msg: 'Enviando dados...',
    //   status: 'info',
    //   open: true,
    // });

    db[method](url, {
      data: obj,
      // creator_id: 1,
    })
      .then((message) => {
        if (message.status === 200) {
          setState({
            msg: 'Cadastrado com sucesso',
            status: 'success',
            open: true,
          });
        }
      })
      .catch(() => {
        setState({
          msg: 'Erro ao tentar o cadastro, tente novamente mais tarde',
          status: 'error',
          open: true,
        });
      });
  };
  return (
    <>
      <Header />
      {error ? (
        <ErrorBox />
      ) : (
        <>
          <Toast
            open={state.open}
            handleClose={toastClose}
            msg={state.msg}
            status={state.status}
          />
          <ManagerForm {...data} onSubmit={onSubmit} />
        </>
      )}
    </>
  );
};

ManagerProperty.getInitialProps = async ({ query }) => {
  if (query.id) {
    try {
      const res = await db(`/property/${query.id}`);
      return { data: res.data };
    } catch (error) {
      return { error: true };
    }
  }
  return null;
};

export default ManagerProperty;
