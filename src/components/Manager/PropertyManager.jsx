import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { db } from '../Helpers/ApiFetch';

import ManagerForm from './ManagerForm';

import 'react-toastify/dist/ReactToastify.css';


class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: props || null,
      info: props || null,
      features: props || null,
      images: [],
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    let toastId = null;

    const {
      details,
      info,
      features,
      images,
    } = this.state;

    const { id } = this.props;
    const method = id ? 'put' : 'post';

    const data = {
      info,
      details,
      features,
      images,
    };

    const url = id
      ? `/property/${id}`
      : '/property';

    toastId = toast('Enviando...');
    db[method](url, {
      data,
      // creator_id: 1,
    })
      .then((message) => {
        if (message.status === 200) {
          toast.update(toastId, {
            render: 'Cadastrado com sucesso',
            type: toast.TYPE.SUCCESS,
            autoClose: 5000,
          });
        }
      })
      .catch(() => toast.update(toastId, {
        render: 'Erro ao cadastrar',
        type: toast.TYPE.ERROR,
        autoClose: 5000,
      }));
  }


  render() {
    return (

      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />

        <ManagerForm
          onSubmit={this.onSubmit}
          data={this.props}
        />
      </>

    );
  }
}


export default PropertyManager;
