/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import Router from 'next/router';
import db from '../src/components/Helpers/ApiFetch';
import Header from '../src/components/Header/Header';

import ManagerForm from '../src/components/UserArea/ManagerForm';

import enums from '../src/content/enums';
import Toast from '../src/components/Helpers/Toast';
import ErrorBox from '../src/components/Helpers/ErrorBox';

const ManagerProperty = (props) => {
  const {
    data,
    error,
    user,
    isLogged,
    logOut,
    openModalLogin,
    openModalUser,
  } = props;
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

    db[method](url, {
      data: obj,
      creator_id: user.id,
    })
      .then((message) => {
        if (message.status === 200) {
          setState({
            msg: 'Cadastrado com sucesso',
            status: 'success',
            open: true,
          });

          Router.push('/property');
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

  const validation = isLogged && user.type_id === enums.userType.consultant;
  return (
    <>
      {!error && validation ? (
        <>
          <Header
            user={user}
            isLogged={isLogged}
            logOut={logOut}
            openModalLogin={openModalLogin}
            openModalUser={openModalUser}
          />
          <Toast
            open={state.open}
            handleClose={toastClose}
            msg={state.msg}
            status={state.status}
          />
          <ManagerForm
            {...data}
            onSubmit={onSubmit}
            user={user}
            isLogged={isLogged}
          />
        </>
      ) : (
        <ErrorBox auth />
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
