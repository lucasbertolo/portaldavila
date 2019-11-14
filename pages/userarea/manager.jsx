/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';
import { db } from '../../src/components/Helpers/ApiFetch';

import ManagerForm from '../../src/components/UserArea/ManagerForm';

// import 'react-toastify/dist/ReactToastify.css';
import Header from '../../src/components/Header/Header';


const ManagerProperty = ({ data }) => {
  const onSubmit = (obj) => {
    // const toastId = null;

    let id;

    if (data) { id = data.id; }

    const method = id ? 'put' : 'post';

    const url = id
      ? `/property/${id}`
      : '/property';

    // toastId = toast('Enviando...');
    db[method](url, {
      data: obj,
      // creator_id: 1,
    })
      .then((message) => {
        if (message.status === 200) {
          // toast.update(toastId, {
          //   render: 'Cadastrado com sucesso',
          //   type: toast.TYPE.SUCCESS,
          //   autoClose: 5000,
          // });
        }
      })
      .catch();
    // toast.update(toastId, {
    //   render: 'Erro ao cadastrar',
    //   type: toast.TYPE.ERROR,
    //   autoClose: 5000,
    // })
  };
  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      /> */}
      <Header />
      <ManagerForm
        {...data}
        onSubmit={onSubmit}
      />
    </>
  );
};

ManagerProperty.getInitialProps = async ({ query }) => {
  if (query.id) {
    try {
      const res = await db(`/property/${query.id}`);
      return { data: res.data };
    } catch (error) {
      // TODO - REDIRECIONAR USUARIO PARA PAGINA DE ERRO - NAO ENCONTRADO
      return null;
    }
  }
  return null;
};

export default ManagerProperty;
