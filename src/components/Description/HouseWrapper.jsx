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

import './HouseWrapper.scss';

export default class HouseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoodList: [],
      typeList: [],
      isLoading: false,
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

  render() {
    const { typeList, neighborhoodList, isLoading } = this.state;
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
            <RingLoader size={150} color="#123abc" loading={isLoading} />
          </div>
        ) : (
          <>
            <SliderImages images={images} />
            <div className="hs-wrapper">
              {/* <SocialShare /> */}

              <CardVisitation kind={kind} neigh={neigh} price={price} />
              <MainBox details={details} features={features} info={info} />
              <ExtraBox features={features} />
              <Maps />
            </div>
          </>
        )}
      </>
    );
  }
}
