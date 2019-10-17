import React from 'react';

import PropertyInfo, { Info } from './PropertyInfo';
import PropertyFeatures from './PropertyFeatures';
import PropertyDetails from './PropertyDetails';
import PropertyPhotos from './PropertyPhotos';

import { db } from '../Helpers/ApiFetch';

import MultiStageProgress from '../Common/MultiStageProgress';
import HouseDescription from '../HouseDescription/HouseDescription';

class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sendStatus: '',
      details: {},
      info: {},
      features: {},
      images: [],
      getServerData: true,
    };
  }


  componentDidMount() {
    const { message } = this.props;

    if (message) {
      this.setState({ sendStatus: message });
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleRequest = () => {
    this.setState({
      getServerData: false,
    });
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
      getServerData,
    } = this.state;

    const dataInfo = new Info(this.props.id ? this.props : info);

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
          data={this.props}
          initialState={details}
        />,
      },
      {
        name: 'Adicionais',
        component: <PropertyFeatures
          handleComponent={this.handleComponent}
          data={this.props}
          initialState={features}
        />,
      },
      {
        name: 'Fotos',
        component: <PropertyPhotos
          handleComponent={this.handleComponent}
          data={this.props}
          initialState={images}
          getServerData={getServerData}
          handleRequest={this.handleRequest}
        />,
      },
      {
        name: 'Resumo',
        component: <HouseDescription
          data={this.props}
          initialState={this.state}
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
