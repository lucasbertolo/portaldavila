/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { RingLoader } from 'react-spinners';

import SliderImages from './SliderImages';
import ExtraBox from './ExtraBox';
import MainBox from './MainBox';
import CardVisitation from './CardVisitation';
import Maps from '../Common/Maps';
import SocialShare from './SocialShare';

import './HouseWrapper.scss';

export default class HouseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      modalVisit: false,
    };
  }

  openModalVisit = () => {
    const { openModalLogin, isLogged } = this.props;
    if (!isLogged) {
      openModalLogin();
    } else {
      this.setState({ modalVisit: true });
    }
  };

  closeModalVisit = () => {
    this.setState({ modalVisit: false });
  };

  render() {
    const {
      isLoading, modalVisit,
    } = this.state;

    const {
      info, details, features, images, propertyId,
      openModalLogin, isLogged, user, manager,
    } = this.props;

    const { position } = info;
    return (
      <>
        {isLoading ? (
          <div style={{ margin: 'auto', height: '400px' }}>
            <RingLoader size={150} color="#123abc" loading={isLoading} />
          </div>
        ) : (
          <div className="container-house-description">
            <SliderImages images={images} />

            {!manager && (
            <SocialShare
              openModalLogin={openModalLogin}
              user={user}
              isLogged={isLogged}
              propertyId={propertyId}
              manager={manager}
            />
            )}

            <div className="hs-wrapper">
              <CardVisitation
                info={info}
                isLogged={isLogged}
                modalVisit={modalVisit}
                openModalVisit={this.openModalVisit}
                openModalLogin={openModalLogin}
                closeModalVisit={this.closeModalVisit}
                user={user}
                propertyId={propertyId}
                manager={manager}
              />
              <MainBox
                details={details}
                features={features}
                info={info}
              />
              <ExtraBox features={features} />
              <Maps lat={position ? position.lat : null} lng={position ? position.long : null} />

            </div>
          </div>
        )}
      </>
    );
  }
}
