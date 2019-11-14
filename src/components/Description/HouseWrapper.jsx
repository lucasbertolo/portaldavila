/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { RingLoader } from 'react-spinners';

import { db } from '../Helpers/ApiFetch';

import SliderImages from './SliderImages';
import ExtraBox from './ExtraBox';
import MainBox from './MainBox';
import CardVisitation from './CardVisitation';
import Maps from '../Common/Maps';
import SocialShare from './SocialShare';
import ModalLogin from '../Login/ModalLogin';

import './HouseWrapper.scss';

export default class HouseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoodList: [],
      typeList: [],
      isLoading: false,
      open: false,
    };
  }

  async componentDidMount() {
    const resultBlock = await db.get('/neighborhood');
    const block = resultBlock.data.map((item) => item.name);
    block.unshift('');

    const resultType = await db.get('/typeofproperty');
    const type = resultType.data.map((item) => item.type);
    type.unshift('');

    this.setState((prevState) => ({
      ...prevState,
      neighborhoodList: block,
      typeList: type,
    }));
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      typeList, neighborhoodList, isLoading, open,
    } = this.state;
    const {
      info, details, features, images,
    } = this.props;

    const { type_id, neighborhood_id, price } = info;

    const kind = typeList[type_id];
    const neigh = neighborhoodList[neighborhood_id];

    return (
      <>
        {isLoading ? (
          <div style={{ margin: 'auto', height: '400px' }}>
            {/* <RingLoader size={150} color="#123abc" loading={isLoading} /> */}
          </div>
        ) : (
          <>
            <SliderImages images={images} />
            <SocialShare />
            <div className="hs-wrapper">
              <CardVisitation kind={kind} neigh={neigh} price={price} />
              <MainBox details={details} features={features} info={info} />
              <ExtraBox features={features} />
              <Maps />
              <button type="button" onClick={this.handleClickOpen}>Abrir</button>
              <ModalLogin
                open={open}
                handleClose={this.handleClose}
                handleAction={this.handleClose}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
