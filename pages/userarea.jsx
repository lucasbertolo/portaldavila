/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import Menu from '../src/components/UserArea/Menu';
import Header from '../src/components/Header/Header';
import Login from '../src/components/Login/Login';

import { storeToken } from '../src/util/user';
import { db } from '../src/components/Helpers/ApiFetch';
import enums from '../src/content/enums';

export default class UserArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      user: {},
    };
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('remax-portal-token');

    if (token) {
      return db
        .post('/signin', {
          token,
        })
        .then((res) => {
          if (res.data) {
            this.setState({ isLogged: true, user: res.data });
          }
        })
        .catch(() => ({ msg: 'Usuário ou senha inválidos' }));
    }

    return null;
  }

  handleLogin = (user) => {
    const { loginUsername, loginPassword } = user;

    return db
      .post('/signin', {
        username: loginUsername,
        password: loginPassword,
      })
      .then((res) => {
        if (res.data.userId) {
          this.setState({ isLogged: true, user });
          storeToken(res.data.token);
        }
      })
      .catch(() => ({ msg: 'Usuário ou senha inválidos' }));
  };

  handleRegister = (user) => {
    const { registerUsername, registerEmail, registerPassword } = user;

    return db
      .post('/register', {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
        phone: '3333-2222',
        type_id: enums.userType.consultant,
      })
      .then((res) => {
        if (res.data.userId) {
          this.setState({ isLogged: true, user: res.data });
          storeToken(res.data.token);
        }
        if (res.data.existUser) {
          return { msg: 'Usuário ou senha já existentes' };
        }

        return null;
      })
      .catch(() => ({
        msg: 'Erro ao tentar cadastrar, tente novamente mais tarde',
      }));
  };

  render() {
    const { isLogged, user } = this.state;
    return (
      <>
        {isLogged ? (
          <>
            <Header />
            <Menu user={user} isLogged={isLogged} />
          </>
        ) : (
          <>
            <Header />
            <Login
              handleLogin={this.handleLogin}
              handleRegister={this.handleRegister}
            />
          </>
        )}
      </>
    );
  }
}
