/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { RingLoader } from 'react-spinners';

import Popup from '../Helpers/Popup';
import { db } from '../Helpers/ApiFetch';

import SliderImages from './SliderImages';
import HouseInfo from './HouseInfo';
import MainBox from './MainBox';

// import Maps from '../Common/Maps';
import ContactBox from '../Contact/ContactBox';
import VisitButton from '../Visit/VisitButton';
import HouseTitle from './HouseTitle';

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
    // const { lat, long } = initialState.info.position;

    return (
      <div>
        {
        isLoading
          ? (
            <div style={{ margin: 'auto', height: '400px' }}>
              <RingLoader
                size={150}
                color="#123abc"
                loading={isLoading}
              />
            </div>
          )
          : (
            <div className="hs-wrapper">

              <HouseTitle
                typeId={type_id}
                neighId={neighborhood_id}
                typeList={typeList}
                neighborhoodList={neighborhoodList}
              />

              <HouseInfo info={info} />
              <SliderImages images={images} />
              <MainBox details={details} features={features} />

              <div className="info-box">
                {/* <Maps lat={lat} lng={long} /> */}
                <ContactBox />
              </div>

              <VisitButton />
              <Popup />
            </div>
          )
      }
      </div>
    );
  }
}
