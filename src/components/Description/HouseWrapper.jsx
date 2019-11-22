/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import { RingLoader } from 'react-spinners';

import SliderImages from './SliderImages';
import ExtraBox from './ExtraBox';
import MainBox from './MainBox';
import CardVisitation from './CardVisitation';
// import Maps from '../Common/Maps';
import SocialShare from './SocialShare';
import ModalLogin from '../Login/ModalLogin';

import { loadUser, checkToken, registerGuest } from '../../util/user';

import './HouseWrapper.scss';

export default class HouseWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      open: false,
      isLogged: false,
      user: {},
      modalVisit: false,
    };
  }

  componentDidMount() {
    checkToken()
      .then((item) => {
        if (item) {
          this.setState({
            isLogged: item.isLogged,
            user: item.user,
          });
        }
      })
      .catch();
  }

  openModalLogin = () => {
    this.setState({
      open: true,
    });
  };

  handleLogin = (user) => loadUser(user)
    .then((data) => {
      this.setState({
        isLogged: true,
        user: data.user,
        open: false,
        // modalVisit: true,
      });
    })
    .catch(() => ({ msg: 'Usuário e/ou senha inválidos' }));

  handleRegister = (user) => registerGuest(user)
    .then((data) => {
      if (!data.existUser) {
        this.setState({
          isLogged: true,
          user: data.user,
          open: false,
          // modalVisit: true,
        });
        return null;
      }
      return { msg: 'Usuário já existente' };
    })
    .catch(() => ({
      msg: 'Erro ao tentar cadastrar, tente novamente mais tarde',
    }));

  closeModalLogin = () => {
    this.setState({ open: false });
  };

  openModalVisit = () => {
    const { isLogged } = this.state;
    if (!isLogged) {
      this.openModalLogin();
    } else {
      this.setState({ modalVisit: true });
    }
  };

  closeModalVisit = () => {
    this.setState({ modalVisit: false });
  };

  render() {
    const {
      isLoading, open, isLogged, user, modalVisit,
    } = this.state;

    const {
      info, details, features, images, propertyId,
    } = this.props;
    return (
      <>
        {isLoading ? (
          <div style={{ margin: 'auto', height: '400px' }}>
            <RingLoader size={150} color="#123abc" loading={isLoading} />
          </div>
        ) : (
          <>
            <SliderImages images={images} />

            <SocialShare
              openModalLogin={this.openModalLogin}
              user={user}
              isLogged={isLogged}
              propertyId={propertyId}
            />

            <div className="hs-wrapper">
              <CardVisitation
                info={info}
                isLogged={isLogged}
                modalVisit={modalVisit}
                openModalVisit={this.openModalVisit}
                closeModalVisit={this.closeModalVisit}
                user={user}
                propertyId={propertyId}
              />
              <MainBox
                details={details}
                features={features}
                info={info}
              />
              <ExtraBox features={features} />
              {/* <Maps lat={-22.711063} lng={-47.656581} /> */}

              <ModalLogin
                open={open}
                classes="login-modal"
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
                handleClose={this.closeModalLogin}
              />
            </div>
          </>
        )}
      </>
    );
  }
}
