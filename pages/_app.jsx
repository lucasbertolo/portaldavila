/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Router from 'next/router';

import {
  checkToken,
  loadUser,
  registerUser,
  getUserInfo,
} from '../src/util/user';

import { OverlayLoading } from '../src/components/Helpers/Loading';
import ModalLogin from '../src/components/Login/ModalLogin';
import ModalUser from '../src/components/Login/ModalUser';
import '../src/assets/scss/main.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLogged: false,
      nonVisibleHeader: true,
      open: false,
      modalUser: false,
      loading: false,
    };
  }

  refreshUser = (id) => getUserInfo(id).then((data) => {
    this.setState({ isLogged: true, user: data.user });
    return { success: true };
  });

  showLoading = () => this.setState({ loading: true });

  hideLoading = () => this.setState({ loading: false });

  handleLogin = (user) => {
    this.showLoading();
    return loadUser(user)
      .then((data) => {
        this.setState({ isLogged: true, user: data.user, open: false });
        this.hideLoading();
        return { success: true };
      })
      .catch(() => {
        this.hideLoading();
        return { success: false, msg: 'Usuário e/ou senha inválidos' };
      });
  };

  handleRegister = (user, type_id) => {
    this.showLoading();

    return registerUser(user, type_id)
      .then((data) => {
        if (!data.existUser) {
          this.setState({ isLogged: true, user: data.user, open: false });
          this.hideLoading();
          return { success: true };
        }
        this.hideLoading();
        return { success: false, msg: 'Usuário já existente' };
      })
      .catch(() => {
        this.hideLoading();
        return {
          msg: 'Erro ao tentar cadastrar, tente novamente mais tarde',
        };
      });
  };

  logOut = () => {
    this.setState({
      isLogged: false,
      user: {},
    });

    Router.push('/');
  };

  openModalLogin = () => {
    this.setState({
      open: true,
    });
  };

  openModalUser = () => {
    this.setState({
      modalUser: true,
    });
  };

  closeModalUser = () => {
    this.setState({
      modalUser: false,
    });
  };

  closeModalLogin = () => {
    this.setState({
      open: false,
    });
  };

  componentDidMount() {
    try {
      this.showLoading();

      checkToken().then((item) => {
        if (item) {
          this.hideLoading();
          this.setState({
            isLogged: true,
            user: item.user,
          });
        }
        this.hideLoading();
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      this.hideLoading();
      console.log(err);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const {
      user, isLogged, open, modalUser, loading,
    } = this.state;

    return (
      <>
        <Component
          {...pageProps}
          isLogged={isLogged}
          user={user}
          openModalLogin={this.openModalLogin}
          handleLogin={this.handleLogin}
          logOut={this.logOut}
          openModalUser={this.openModalUser}
          handleRegister={this.handleRegister}
          showLoading={this.showLoading}
          hideLoading={this.hideLoading}
        />

        <ModalLogin
          open={open}
          classes="login-modal"
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleClose={this.closeModalLogin}
        />

        <ModalUser
          modalUser={modalUser}
          user={user}
          closeModalUser={this.closeModalUser}
          refreshUser={this.refreshUser}
        />

        <OverlayLoading status={loading} />
      </>
    );
  }
}

export default MyApp;
