/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Router from 'next/router';

import Header from '../src/components/Header/Header';
import { checkToken, loadUser, registerGuest } from '../src/util/user';

import ModalLogin from '../src/components/Login/ModalLogin';
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
    };
  }


  handleLogin = (user) => loadUser(user)
    .then((data) => {
      this.setState({ isLogged: true, user: data.user, open: false });
      return { success: true };
    })
    .catch(() => ({ success: false, msg: 'Usuário e/ou senha inválidos' }));

  handleRegister = (user) => registerGuest(user)
    .then((data) => {
      if (!data.existUser) {
        this.setState({ isLogged: true, user: data.user, open: false });
        return { success: true };
      }
      return { success: false, msg: 'Usuário já existente' };
    })
    .catch(() => ({
      msg: 'Erro ao tentar cadastrar, tente novamente mais tarde',
    }));

  logOut = () => {
    this.setState({
      isLogged: false,
      user: {},
    });

    Router.push('/');
  };

  hideHeader = () => {
    this.setState({
      nonVisibleHeader: true,
    });
  }

  openModalLogin = () => {
    this.setState({
      open: true,
    });
  }

  componentDidMount() {
    const nonVisibleHeader = Router.route === '/';
    try {
      checkToken().then((item) => {
        if (item) {
          this.setState({
            isLogged: true,
            user: item.user,
          });
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    this.setState({
      nonVisibleHeader,
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    const {
      user, isLogged, nonVisibleHeader, open,
    } = this.state;

    return (
      <>
        <Header
          user={user}
          isLogged={isLogged}
          logOut={this.logOut}
          openModalLogin={this.openModalLogin}
          nonVisibleHeader={nonVisibleHeader}
        />

        <Component
          {...pageProps}
          isLogged={isLogged}
          user={user}
          openModalLogin={this.openModalLogin}
          hideHeader={this.hideHeader}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />

        <ModalLogin
          open={open}
          classes="login-modal"
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleClose={this.closeModalLogin}
        />
      </>
    );
  }
}

export default MyApp;
