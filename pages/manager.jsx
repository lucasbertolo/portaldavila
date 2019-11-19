/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';

import Router from 'next/router';
import { db } from '../src/components/Helpers/ApiFetch';
import { checkToken } from '../src/util/user';

import ManagerForm from '../src/components/UserArea/ManagerForm';
import Header from '../src/components/Header/Header';

import enums from '../src/content/enums';
import Toast from '../src/components/Helpers/Toast';
import ErrorBox from '../src/components/Helpers/ErrorBox';


const ManagerProperty = ({ data, error, userId }) => {
  const [state, setState] = useState({
    msg: '',
    open: false,
    status: 'info',
    user: {},
    isLogged: false,
  });
  const toastClose = () => {
    setState({ open: false });
  };


  useEffect(() => {
    checkToken()
      .then((item) => {
        if (item) {
          setState({
            isLogged: item.isLogged,
            user: item.user,
          });
        }
      })
      .catch();
  }, []);

  const onSubmit = (obj) => {
    let id;

    if (data) {
      id = data.id;
    }

    const method = id ? 'put' : 'post';
    const url = id ? `/property/${id}` : '/property';

    db[method](url, {
      data: obj,
      creator_id: userId,
    })
      .then((message) => {
        if (message.status === 200) {
          setState({
            msg: 'Cadastrado com sucesso',
            status: 'success',
            open: true,
          });

          Router.push('/userarea');
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

  const validation = state.isLogged && state.user.type_id === enums.userType.consultant;

  return (
    <>
      <Header />
      {!error && validation ? (
        <>
          <Toast
            open={state.open}
            handleClose={toastClose}
            msg={state.msg}
            status={state.status}
          />
          <ManagerForm
            {...data}
            onSubmit={onSubmit}
            user={state.user}
            isLogged={state.isLogged}
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
      const { userId } = query;
      const res = await db(`/property/${query.id}`);
      return { data: res.data, userId };
    } catch (error) {
      return { error: true };
    }
  }
  return null;
};

export default ManagerProperty;
