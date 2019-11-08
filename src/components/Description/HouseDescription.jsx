/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { RingLoader } from 'react-spinners';

import Popup from '../Helpers/Popup';
import { db } from '../Helpers/ApiFetch';

import SliderImages from './SliderImages';
import ExtraBox from './ExtraBox';
import MainBox from './MainBox';

import ContactBox from '../Contact/ContactBox';
import HouseTitle from './HouseTitle';

import './HouseDescription.scss';
import CardVisitation from './CardVisitation';

export default class HouseDescription extends React.Component {
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

    const { type_id, neighborhood_id } = info;

    const kind = typeList[type_id];
    const neigh = neighborhoodList[neighborhood_id];
    // const { lat, long } = initialState.info.position;

    return (
      <>
        {isLoading ? (
          <div style={{ margin: 'auto', height: '400px' }}>
            <RingLoader size={150} color="#123abc" loading={isLoading} />
          </div>
        ) : (
          <div className="hs-wrapper">
            <SliderImages images={images} />
            {/* <SocialShare /> */}
            <HouseTitle kind={kind} neigh={neigh} />
            <hr />
            <CardVisitation />

            <MainBox details={details} features={features} />

            <ExtraBox features={features} />

            <ContactBox />

            {/* <VisitButton />

            <Popup /> */}
          </div>
        )}
      </>
    );
  }
}
