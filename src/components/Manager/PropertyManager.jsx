import React from 'react';

import PropertyInfo, { Info } from './PropertyInfo';
import PropertyFeatures, { Features } from './PropertyFeatures';
import PropertyDetails, { Details } from './PropertyDetails';
import PropertyPhotos from './PropertyPhotos';

import { db } from '../Helpers/ApiFetch';

import MultiStageProgress from '../Common/MultiStageProgress';
import HouseDescription from '../Description/HouseDescription';

class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sendStatus: '',
      details: props || null,
      info: props || null,
      features: props || null,
      images: [],
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

    db[method](url, {
      data,
      // creator_id: 1,
    })
      .then((message) => {
        if (message.status === 200) { this.setState({ sendStatus: 'Cadastrado com sucesso' }); }
      })
      .catch(() => this.setState({ sendStatus: 'Erro ao cadastrar' }));
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

      <div>
        <MultiStageProgress steps={steps} onSubmit={this.onSubmit} />
        {sendStatus}
      </div>

    );
  }
}


export default PropertyManager;
