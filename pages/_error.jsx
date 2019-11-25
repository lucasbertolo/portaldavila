/**
 * Creating a page named _error.js lets you override HTTP error messages
 */
import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
// import { Container } from 'reactstrap';
import { withRouter } from 'next/router';
import ErrorBox from '../src/components/Helpers/ErrorBox';
import '../src/assets/scss/main.scss';

class ErrorPage extends React.Component {
  static getInitialProps({ res, xhr }) {
    // eslint-disable-next-line no-nested-ternary
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  render() {
    let response;
    const { errorCode, router } = this.props;
    const {
      user,
      isLogged,
      logOut,
      openModalLogin,
      openModalUser,
    } = this.props;

    switch (errorCode) {
      case 200: // Also display a 404 if someone requests /_error explicitly
      case 404:
        response = (
          <div>
            <Head />
            <ErrorBox
              notFound
              isLogged={isLogged}
              user={user}
              openModalLogin={openModalLogin}
              logOut={logOut}
              openModalUser={openModalUser}
            />
          </div>
        );
        break;
      case 500:
        response = (
          <div>
            <Head />
            <h1 className="display-4">Internal Server Error</h1>
            <p>An internal server error occurred.</p>
          </div>
        );
        break;
      default:
        response = (
          <div>
            <Head />
            <h1 className="display-4">
HTTP
              {' '}
              {errorCode}
              {' '}
Error
            </h1>
            <p>
              An
              {' '}
              <strong>
HTTP
                {' '}
                {errorCode}
              </strong>
              {' '}
error occurred while trying
              to access
              {' '}
              <strong>{router.pathname}</strong>
            </p>
          </div>
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);
