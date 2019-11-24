/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Header from '../Header/Header';

import './ErrorBox.scss';

const ErrorBox = (props) => {
  const {
    user,
    isLogged,
    logOut,
    openModalLogin,
    openModalUser,
    auth,
    internal,
    notFound,
  } = props;

  return (
    <>
      <Header
        user={user}
        isLogged={isLogged}
        logOut={logOut}
        openModalLogin={openModalLogin}
        openModalUser={openModalUser}
      />

      <div className="center">
        <div className="error">
          <div className="number">4</div>
          <div className="illustration">
            <div className="circle" />
            <div className="clip">
              <div className="paper">
                <div className="face">
                  <div className="eyes">
                    <div className="eye eye-left" />
                    <div className="eye eye-right" />
                  </div>
                  <div className="rosyCheeks rosyCheeks-left" />
                  <div className="rosyCheeks rosyCheeks-right" />
                  <div className="mouth" />
                </div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>

        {auth && <div className="error-text">Ops. Conteúdo não autorizado</div>}

        {notFound && <div className="error-text"> Ops. A página que voce está procurando não existe</div>}

        {internal && <div className="error-text"> Ops. Ocorreu um erro interno, tente novamente mais tarde</div> }
      </div>
    </>
  );
};

export default ErrorBox;
