import React from 'react';

import Menu from '../src/components/UserArea/Menu';
import Header from '../src/components/Header/Header';
import Login from '../src/components/Login/Login';

import {
  checkToken, loadUser, registerGuest,
} from '../src/util/user';


export default class UserArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      user: {},
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

  handleLogin = (user) => loadUser(user)
    .then((data) => {
      this.setState({ isLogged: true, user: data.user });
    })
    .catch(() => ({ msg: 'Usuário e/ou senha inválidos' }))
  ;

  handleRegister = (user) => registerGuest(user)
    .then((data) => {
      if (!data.existUser) {
        this.setState({ isLogged: true, user: data.user });
        return null;
      }
      return ({ msg: 'Usuário já existente' });
    })
    .catch(() => ({ msg: 'Erro ao tentar cadastrar, tente novamente mais tarde' }))

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
              container
              handleLogin={this.handleLogin}
              handleRegister={this.handleRegister}
            />
          </>
        )}
      </>
    );
  }
}
