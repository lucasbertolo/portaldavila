import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

import PropertyInfo, { Info } from './PropertyInfo';
import PropertyFeatures, { Features } from './PropertyFeatures';
import PropertyDetails, { Details } from './PropertyDetails';
import PropertyPhotos from './PropertyPhotos';

import { db } from '../Helpers/ApiFetch';

import ManagerForm from './ManagerForm';
import HouseDescription from '../Description/HouseDescription';

import 'react-toastify/dist/ReactToastify.css';


class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sendStatus: '',
      details: props || null,
      info: props || null,
      features: props || null,
      images: [],
      isValid: false,
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const resultPhotos = await db.get(`/property/photos/${id}`);

      this.setState({
        images: resultPhotos.data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
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

  handleComponent = (name, data) => {
    this.setState(() => ({
      [name]: data,
    }));
  }

  render() {
    const {
      sendStatus,
      info,
      details,
      features,
      images,
      isValid,
    } = this.state;

    const dataInfo = new Info(info);
    const dataDetails = new Details(details);
    const dataFeature = new Features(features);

    const steps = [
      {
        name: 'Dados gerais',
        component: <PropertyInfo
          handleComponent={this.handleComponent}
          data={dataInfo}
        />,
      },
      {
        name: 'Comodos',
        component: <PropertyDetails
          handleComponent={this.handleComponent}
          data={dataDetails}
        />,
      },
      {
        name: 'Adicionais',
        component: <PropertyFeatures
          handleComponent={this.handleComponent}
          data={dataFeature}
        />,
      },
      {
        name: 'Fotos',
        component: <PropertyPhotos
          handleComponent={this.handleComponent}
          data={images}
        />,
      },
      {
        name: 'Resumo',
        component: <HouseDescription
          info={dataInfo}
          details={dataDetails}
          features={dataFeature}
          images={images}
        />,
      },
    ];

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

        <ManagerForm steps={steps} onSubmit={this.onSubmit} isValid={isValid} />

        {sendStatus}
      </>

    );
  }
}


export default PropertyManager;
