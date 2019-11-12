/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import Menu from '../src/components/UserArea/Menu';
import Header from '../src/components/Header/Header';
import Login from '../src/components/Login/Login';

export default class UserArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      user: {},
    };
  }

  handleLogin = (user) => {
    // chamar bd
    this.setState({ isLogged: true, user });
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
            <Login handleLogin={this.handleLogin} />
          </>
        )}
      </>
    );
  }
}
