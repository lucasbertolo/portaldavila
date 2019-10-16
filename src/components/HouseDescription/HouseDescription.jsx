/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import Popup from '../Helpers/Popup';
import { db } from '../Helpers/ApiFetch';

import SliderImages from './SliderImages';
import HouseInfo from './HouseInfo';
import MainBox from './MainBox';

import Maps from '../Common/Maps';
import ContactBox from '../Common/ContactBox';
import VisitButton from '../Common/VisitButton';
import HouseTitle from './HouseTitle';

export default class HouseDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhoodList: [],
      typeList: [],
    };
  }

  async componentDidMount() {
    const resultBlock = await db.get('/neighborhood');
    const options = resultBlock.data.map((item) => item.name);

    const resultType = await db.get('/typeofproperty');
    const optionsType = resultType.data.map((item) => item.type);

    this.setState((prevState) => ({
      ...prevState,
      neighborhoodList: options,
      typeList: optionsType,
    }));
  }


  render() {
    const { typeList, neighborhoodList } = this.state;

    const { initialState } = this.props;
    const { type_id, neighborhood_id } = initialState.info;
    const { images } = initialState;

    return (
      <div className="hs-wrapper">
        <HouseTitle
          typeId={type_id}
          neighId={neighborhood_id}
          typeList={typeList}
          neighborhoodList={neighborhoodList}
        />


        <HouseInfo info={initialState.info} />
        <SliderImages images={images} />
        <MainBox />

        <div className="info-box">
          <Maps />
          <ContactBox />
        </div>

        <VisitButton />
        <Popup />
      </div>


    );
  }
}
